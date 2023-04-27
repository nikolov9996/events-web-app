import { useAppDispatch, useAppSelector } from "app/hooks"
import { removeTickets, selectTickets } from "./wishListSlice"
import { WishLIstItemType } from "app/types";
import Button from "app/components/Button";
import ReactToPrint from 'react-to-print';
import React, { useRef } from "react";


const Index = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectTickets);
  const componentRef = useRef<any>();
  const [loading, setLoading] = React.useState(false);

  const handleRemove = (id?: string) => {
    dispatch(removeTickets(id))
  }
  return (
    <div>

      <div ref={componentRef} className="flex flex-wrap justify-between max-w-7xl pt-6">

        {items.map((item: WishLIstItemType, index) => {
          return <div className="flex pt-2 relative">
            <img alt="thumbnail" className="h-40" src={item?.image} />
            <div className=" text-gray-100 bg-gray-800 w-72 p-2 pr-10 ">
              <p className="text-lg font-semibold">Tickets: {item.name}</p>

              <p>Tickets: {item.ticketsCount}</p>
              <p>Avg. Price: {item.price}</p>

              <div onClick={() => handleRemove(item?.id)} className="w-6 absolute top-4 right-4 cursor-pointer">
                <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        })}

      </div>
      <div className="p-4 justify-end flex">
         {loading
        ? <p className="text-lg font-bold">Loading content...</p>
        : <ReactToPrint
          copyStyles={true}
          removeAfterPrint={true}
          onBeforeGetContent={() => setLoading(true)}
          onBeforePrint={() => setLoading(false)}
          documentTitle="My_Tickets"
          trigger={() => <Button label=" Download PDF" disabled={!items.length} onClick={() => { }} />}
          content={() => componentRef.current}
        />
      }
      </div>
     
    </div>

  )
}

export default Index