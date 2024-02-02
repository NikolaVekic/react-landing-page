import React from "react";
import "./App.css";
import { Navbar, Brand, Cta } from "./components";
import { Footer, Possibility, Features, WhatAI, Header } from "./containers";

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
      <Footer />
    </div>
  );
};

export default App;
