import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Testimonials } from "./components/testimonials";
import Brochure from "./components/brochure";
import { Team } from "./components/Team";
import Footer from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <Brochure />
        <Team data={landingPageData.Team} />
        <Testimonials data={landingPageData.Testimonials} />
        <About data={landingPageData.About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
