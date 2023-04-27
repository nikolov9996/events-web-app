import { getEventDetails } from "app/api/services";
import { getLargestImage } from "app/helpers";
import { useAppDispatch } from "app/hooks";
import { EventDetailsType } from "app/types";
import moment from "moment";
import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import { addTickets } from "../WishList/wishListSlice";
import Button from "app/components/Button";

const Index = () => {
  const dispatch = useAppDispatch();
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = React.useState<EventDetailsType>();
  const [tickets, setTickets] = React.useState<number>(0)

  useEffect(() => {
    getEventDetails(eventId)
      .then(({ data }) => {
        setEvent(data)
      })
      .catch(e => console.log(e))
      .finally(() => { })
  }, [eventId]);


  const handleAdd = (price: string) => {
    dispatch(addTickets({
      id: eventId,
      price: price,
      ticketsCount: tickets,
      image: getLargestImage(event?.images)?.url,
      name: event?.name
    }))
    alert(tickets + " tickets added to wishlist")
    setTickets(0);
  }

  return (
    <div>
      <div className="max-w-7xl  flex flex-wrap md:flex-row sm:flex-col justify-around p-6">

        <div className="max-w-md md:w-1/2 sm:w-full mt-10  ">

          <div>
            <img className="sm:w-full" alt="thumbnail" src={getLargestImage(event?.images)?.url} />
          </div>

          <div className="mt-4 sm:w-full">
            <p className="text-center font-semibold" >Stage Map</p>
            <img className="mt-4 sm:w-full" alt="stage" src={event?.seatmap?.staticUrl} />
          </div>
        </div>

        <div className="bg-slate-400 md:w-1/2 sm:w-full mt-10 p-6 flex flex-col  gap-5 ">
          <h5 className="font-medium text-xl mb-6">{event?.name} <span className="font-normal text-lg"> {moment(new Date(event?.dates.start?.localDate + " " + event?.dates.start?.localTime)).format('MMM Do YYYY, h:mm a')}</span></h5>

          <p>{event?.info}</p>

          <p>For more info <a className="text-lg font-semibold text-blue-700" target="_blank" rel="noreferrer" href={event?.url}>Original site</a></p>
          <p>Tickets Limit: <span className="text-lg font-semibold">{event?.accessibility?.ticketLimit || "N/A"}</span> </p>
          <p>Ticket Price Range/s </p>

          {event?.priceRanges?.map(({ currency, max, min, type }, index) => {
            return (
              <div key={index} className=" justify-between content-center flex flex-row border-spacing-1 border-2 border-gray-900 border-opacity-50 rounded-md p-2">
                <p className="text-green-800 font-semibold text-lg self-center"> {min.toFixed(2)} - {max.toFixed(2)} {currency}</p>

                <select onChange={(e) => setTickets(Number(e.target.value))} value={tickets} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option >0</option>
                  {new Array(event?.accessibility?.ticketLimit).fill(1).map((x, i) => {
                    return <option key={i} value={i + 1}>{i + 1}</option>
                  })}
                </select>
                {/*  avg price */}
                <Button label="Add to Wish List" disabled={!tickets} onClick={() => handleAdd(Math.round(min + max / 2).toString() + " " + currency)} />
              </div>
            )
          })}
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Index;