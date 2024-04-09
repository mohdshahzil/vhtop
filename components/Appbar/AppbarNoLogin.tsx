import React from "react";
import Image from "next/image";
import vitlogo from "@/public/vitclogo.png";
import useUserStore from "@/app/store/store";

const AppbarNoLogin = () => {
  return (
    <div className="h-14 bg-primary flex items-center justify-start p-2">
          <div>
            <Image className="px-1" src={vitlogo} alt="Logo" width={60} height={40} />
          </div>
          <div className="text-white text-3xl font-bold px-1 font-serif">VIT</div>
          <div className="text-white px-1 font-serif">(Chennai Campus)</div>
    </div>
  );
};

export default AppbarNoLogin;
