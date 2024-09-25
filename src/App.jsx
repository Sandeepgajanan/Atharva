import React from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Expand from "./components/Expand";
import Services from "./components/Services";
import Helps from "./components/Helps";
import Footer from "./components/Footer";
import Marque from "./components/Marque";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen text-zinc-100 relative back">
        <Loader />
        <Navbar />
        <Hero />
        <Expand />
        <Marque />
        <Services />
        <Helps />
        <Footer />
      </div>
    </>
  );
};

export default App;
