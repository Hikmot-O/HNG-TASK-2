import React from "react";
import Hero from "./Hero";
import TopMovies from "./TopMovies";
import Footer from "./footer";

const HomePage = () => {
  return <section className="h-screen overflow-y-auto">
    {/* <Hero /> */}
    <TopMovies />
    <Footer />
  </section>;
};

export default HomePage;
