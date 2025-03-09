import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Modal from "./components/Modal";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Modal/>
    </main>
  )
};

export default App;
