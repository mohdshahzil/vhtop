"use client";
import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
export default function page() {
  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <div className="flex flex-col sm:ml-12 ml-3 mt-4 container">
        <div className="flex justify-center  h-min">
          <div className="text-3xl">My info</div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1">Registeration Number:</div>
          <div className="grid grid-cols-1"></div>
          <div className="grid grid-cols-1">Name</div>
          <div className="grid grid-cols-1"></div>

          <div className="grid grid-cols-1">Block Name:</div>
          <div className="grid grid-cols-1"></div>
          <div className="grid grid-cols-1">Mess:</div>
          <div className="grid grid-cols-1"></div>
        </div>
      </div>
    </div>
  );
}
