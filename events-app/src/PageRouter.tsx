import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "app/features/Layout";
import Home from "app/features/Home";
import WishList from "app/features/WishList";
import EventDetails from "app/features/EventDetails";
import CreateEvent from "app/features/CreateEvent";

import { PAGES } from "app/constants";

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PAGES.MY_TICKETS} element={<WishList />} />
          <Route path="event">
            <Route path={PAGES.EVENT_DETAILS} element={<EventDetails />} />
          </Route>
          <Route path={PAGES.CREATE_EVENT} element={<CreateEvent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
