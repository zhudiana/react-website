import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/pages/Product";
import Body1 from "./components/Body/Body1";
import Body2 from "./components/Body/Body2";
import Body3 from "./components/Body/Body3";
import Body5 from "./components/Body/Body5";
import Footer from "./components/Body/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Body1 />
        <Body2 />
        <Body3 />
        <Body5 />
        <Footer />
        <Routes>{/* <Route path="/" exact component={Product} /> */}</Routes>
      </Router>
    </>
  );
}

export default App;
