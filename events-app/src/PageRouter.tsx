import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "app/features/Layout";
import Home from "app/features/Home";
import WishList from "app/features/WishList";
import EventDetails from "app/features/EventDetails";

import { PAGES } from "app/constants";

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PAGES.MY_TICKETS} element={<WishList />} />
          <Route path={PAGES.EVENT_DETAILS} element={<EventDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
