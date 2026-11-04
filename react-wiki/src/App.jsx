import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Search from "./components/Search/Search";
import Cards from "./components/Cards/Cards";
import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";


import { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Episodes from "./Pages/Episodes";
import Navbar from "./components/Navbar/Navbar";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails/CardDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
        <Route path="/character/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;