import React from "react";
import "./App.css";
import { Navbar, Brand, Cta } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatAI,
  Header,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatAI />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
