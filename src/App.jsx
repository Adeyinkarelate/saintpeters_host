import React from "react";
import Navbar from "./components/Navbar";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Current from "./pages/Current";

import Past from "./pages/Past";
import Contact from "./pages/Contact";
import RoutLayout from "./Layout/RoutLayout";
import Triumphant from './components/Triumphant';
import Event from "./pages/Event";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RoutLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/current" element={<Current />} />
        <Route path="/past" element={<Past />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        <Route path="/triumphant" element={<Triumphant/>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
