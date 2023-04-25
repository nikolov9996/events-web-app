import { getEvents } from "app/api/services";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { selectEvents, setEvents } from "./homeSlice";

const Index = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(selectEvents);

  useEffect(() => {
    getEvents()
      .then(({ data }) => {
        const { events } = data._embedded;
        dispatch(dispatch(setEvents(events)));
      })
  }, [dispatch]);

  return (
    <div>
      {events?.map((ev, index) => {
        return <span key={index}> {JSON.stringify(ev, null, 2)}</span>
      })}
    </div>
  );
};

export default Index;
