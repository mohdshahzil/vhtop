"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import vitlogo from "@/public/vitclogo.png";
import useUserStore from "@/app/store/store";
const AppbarAdmin = () => {
  const user=useUserStore((state)=>state.user);
  return (
    <div className="sticky top-0 z-10">
      <div className="h-14 bg-primary   flex items-center justify-between p-2 text-white font-medium">
        <div className="flex gap-2">
          <div>
            <Image
              className="px-1"
              src={vitlogo}
              alt="Logo"
              width={60}
              height={40}
            />
          </div>
          <div className="text-white text-3xl font-bold px-1 font-serif">
            VIT
          </div>
          <div className="text-white px-1 font-serif">(Chennai Campus)</div>
        </div>
        <div className="flex items-center justify-center gap-2 m-2 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>52216</div>
        </div>
      </div>
    </div>
  );
};

export default AppbarAdmin;
