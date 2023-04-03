import React from "react";
import Banner from '../components/bannerIndex.jsx';
import AboutUs from '../components/aboutusIndex.jsx';
import Services from '../components/servicesIndex.jsx';
import Contact from '../components/contactIndex.jsx';
import Footer from '../components/footerIndex.jsx';

function Index(){
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
