import { getEvents } from "app/api/services";
import { useAppDispatch, useAppSelector } from "app/hooks";
import React, { useEffect } from "react";
import { selectEvents, selectPage, selectPageInfo, selectSize, setEvents, setPage, setPageInfo } from "./homeSlice";
import moment from "moment";
import { Link } from "react-router-dom";
import { PAGES } from "app/constants";
import { getLargestImage } from "app/helpers";
import Loader from "app/components/Loader";
import Pagination from "app/components/Pagination";
import EventSkeleton from "app/components/EventSkeleton";

const Index = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(selectEvents);
  const page = useAppSelector(selectPage);
  const size = useAppSelector(selectSize);
  const [keyword, setKeyword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const pageInfo = useAppSelector(selectPageInfo);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data }: any = await getEvents({ keyword, page, size })
      if (data?._embedded?.events) {
        const { events } = data._embedded;

        dispatch(dispatch(setEvents(events)));

      } else {
        dispatch(dispatch(setEvents([])));
      }

      dispatch(setPageInfo(data.page))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  const handleKeyword = (word: string) => {
    dispatch(setPage(1))
    setKeyword(word)
  }

  const handleNextPage = () => {
    dispatch(setPage((page + 1)))
  }

  const handlePrevPage = () => {
    dispatch(setPage((page - 1)))
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [dispatch, page, size, keyword,]);

  const EventsList = () => {
    return <>
      {events.map((ev, i) => {

        const { dates, id, images, name } = ev;
        // sorting images just in case if sime small image appears 1st
        const image = getLargestImage([...images]);

        return <div key={i} className="bg-white w-64 rounded-lg shadow-lg m-3">
          <Link key={i} to={PAGES.EVENT_DETAILS_PATH(id)}>
            <img alt="thumbnail" className="rounded-t-lg object-cover h-36 w-full" src={image?.url} />
            <div className="p-2">
              <p className="font-medium">{name}</p>
              <p className="">{moment(new Date(dates?.start?.dateTime)).format('llll')}</p>
            </div>
          </Link>
        </div>
      })}
    </>
  }

  const EventsSkeletonLoader = () => {
    return <>
      {Array(size).fill(1).map((_, i) => { return <EventSkeleton key={i} /> })}
    </>
  }

  return (
    <div >
      <div className="flex w-full justify-end items-center">

        <div>
          <p></p>
          <Loader loading={loading} />
        </div>

        <div className="flex items-end  w-96 p-4">
          <input onChange={({ target }) => { handleKeyword(target.value) }} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
        </div>
      </div>

      <div className="flex flex-wrap place-items-center justify-evenly" >

        {loading
          ? <EventsSkeletonLoader />
          : <EventsList />
        }

      </div>
      <Pagination prev={handlePrevPage} next={handleNextPage} page={pageInfo.number} pages={pageInfo.totalPages} />
    </div>
  );
};

export default Index;
