"use client";
import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import useUserStore from "@/app/store/store";
export default function page() {
  const user=useUserStore(state=>state.user)
  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <div className="flex flex-col sm:ml-12 ml-3 mt-4 container">
        <div className="flex justify-center  h-min">
          <div className="text-3xl">My info</div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1">Registeration Number: {user.regNo}</div>
          <div className="grid grid-cols-1"></div>
          <div className="grid grid-cols-1">Name: {user.name}</div>
          <div className="grid grid-cols-1"></div>

          <div className="grid grid-cols-1">Block Name:  {user.block} </div>
          <div className="grid grid-cols-1"></div>
          <div className="grid grid-cols-1">Mess:  {user.mess}</div>
          <div className="grid grid-cols-1"></div>
        </div>
      </div>
    </div>
  );
}
