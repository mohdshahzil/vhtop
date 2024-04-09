import React from "react";
import AppbarNoLogin from "@/components/Appbar/AppbarNoLogin";
import Heading from "@/components/Heading";
import Card from "@/components/Card/Card";
import dummyData from "./content/dummyData";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
const page = () => {
  return (
    <div className=" ">
      <AppbarNoLogin></AppbarNoLogin>
      <Heading></Heading>
      <HeroSection></HeroSection>
      <div className="sm:flex  sm:m-4 m-3  ">
        <Card
          title={dummyData[0].title}
          content={dummyData[0].content}
          icon={dummyData[0].icon}
        />
        <Card
          title={dummyData[1].title}
          content={dummyData[1].content}
          icon={dummyData[1].icon}
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
