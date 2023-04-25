import { getEvents } from "app/api/services";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { selectEvents, setEvents } from "./homeSlice";
import moment from "moment";
import { Link } from "react-router-dom";
import { PAGES } from "app/constants";

const Index = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(selectEvents);

  // useEffect(() => {
  //   getEvents()
  //     .then(({ data }) => {
  //       const { events } = data._embedded;
  //       dispatch(dispatch(setEvents(events)));
  //     })
  // }, [dispatch]);

  return (
    <div>
      {/* add price */}
      {/* add link */}
      {/* add quckview button */}
      {/* create this a template */}

      <div className="flex w-full justify-end">
        <div className="flex items-end  w-96 p-4">
          <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
          <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>


      <div className="flex flex-wrap place-items-center justify-evenly" >

        {events.map((ev, i) => {
          const { dates, id, images,name } = ev;
          // sorting images just in case if sime prity small image appears 1st
          images.sort((a, b) => b.width - a.width);

          return <div key={i} className="bg-white w-64 shadow-lg m-3">
            <img className="rounded object-fill" src={images[0]?.url} />
            <div className="p-2">
              <Link key={i} to={PAGES.EVENT_DETAILS_PATH(id)}>
                <p className="font-medium">{name}</p>
              </Link>
              <p className="">{moment(new Date(dates?.start?.dateTime)).format('llll')}</p>
            </div>
          </div>

        })}

      </div>
    </div>
  );
};

export default Index;
