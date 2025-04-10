"use client";
import React from "react";

import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";

const page = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <AppbarLogin />
      <Sidebar />
      <div className="flex flex-col items-center mt-4 container mx-auto">
        <div className="text-3xl mb-4">My Info</div>

        <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden p-6">
          <h2 className="text-xl font-semibold mb-4">Mentored by</h2>
          <div className="mb-6">
            <div className="mb-4">
              <p className="font-medium">Dr. D. Kavitha</p>
              <p>Associate Professor</p>
              <p>School of Computer Science and Engineering</p>
            </div>
            <div>
              <p className="font-medium">Dr. Sherly Alphonse</p>
              <p>Associate Professor</p>
              <p>School of Computer Science and Engineering</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Team Members</h2>
          <div className="space-y-2">
            <p>Soham Shashidhar — 22MIS1151</p>
            <p>Mohammad Shahzil — 22MIS1161</p>
            <p>Shreenidhi Saaradha — 22MIS1162</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
