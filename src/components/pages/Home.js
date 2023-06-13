import React from "react";
import "./Home.css";
import Upcomingevents from "../layout/UpcommingEvents/Upcomingevents";
import Header from "../layout/Header";
import Accelerate from "../layout/Accelerate";
import InspirationalClasses from "../layout/InspirationalClasses/InspirationalClasses";
import CeoMessage from "../layout/CeoMessage";
import OurStrength from "../layout/OurStrength";
import OurCollaboration from "../layout/OurCollaboration";
import TrainersCertified from "../layout/TrainersCertified";
import Upperfooter from "../layout/Upperfooter";

const Home = () => {


  return (
    <>
      <Header/>
      <Accelerate/>
      <InspirationalClasses />
      <CeoMessage/>
      <OurStrength/>
      <Upcomingevents/>
      <OurCollaboration/>
      <TrainersCertified/>
      <Upperfooter/>

      {/* <Testimonials/> */}
    </>
  );
};

export default Home;
