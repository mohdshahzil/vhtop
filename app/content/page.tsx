import Spotlight from "@/components/Spotlight/Spotlight";
import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
const page = () => {
  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <Spotlight />
    </div>
  );
};

export default page;
