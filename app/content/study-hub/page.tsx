import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import SubjectItems from "@/components/SubjectItems/SubjectItems";
import { cseData } from "./cseData";
import { eceData } from "./eceData";
const page = () => {
  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <div className="flex flex-col sm:ml-12 ml-3">
        <div className="flex items-center justify-between text-primary text-4xl font-medium m-4">
          <p>Study Hub : Academic Resources</p>
        </div>
        {/* <p className="text-gray-500 mx-4 text-xl">
          <span className="text-gray-500">Description: </span>
          Night Mess is operated between 10:30 p.m to 1:00 a.m.
        </p> */}
        <SubjectItems title="Computer Science & Specializations" subItems={cseData} /> 
        <SubjectItems title="Electronics and Communication" subItems={eceData} /> 

      </div>
    </div>
  );
};

export default page;


