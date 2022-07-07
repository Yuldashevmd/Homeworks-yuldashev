import React from "react";
import TableItem from "../components/table/table";
import State from "../components/Hooks/useState/index";
import Navbar from "../components/Navbar/index";
import Home from "../components/Home";
import Params from "../components/useParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "../components/useParams/idCard";
import RestApi from "../components/RestApi";
import Tailwind from "../components/tailwind";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/state" element={<State />} />
          <Route path="/restapi" element={<RestApi />} />
          <Route path="/table" element={<TableItem />} />
          <Route path="/params" element={<Params />} />
          <Route path="/params:id" element={<Card />} />
          <Route path="/tailwind" element={<Tailwind />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Root;
