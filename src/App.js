import React from "react";
import Navbar from "./components/NavBar";
import Bio from "./components/Bio";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Reset.css';
import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Bio />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

