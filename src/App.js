import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Bio />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

