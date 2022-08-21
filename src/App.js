import React, { useEffect, useState } from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { client } from "./client";

const App = () => {
  let [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {testimonials?.length && brands?.length ? <Testimonial /> : null}
      <Footer />
    </div>
  );
};

export default App;
