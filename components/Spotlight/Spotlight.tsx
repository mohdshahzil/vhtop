import React from "react";
import { Button } from "../ui/button";
import lightning from "@/assets/lightning.png";
import Image from "next/image";
const Spotlight = () => {
  return (
    <div className="">
      <div className=" sm:ml-10 ml-4">
        <div className="font-medium md:text-3xl text-2xl p-3">
          <span className="w-min">Spotlight</span>
        </div>
      </div>
      <div className="flex justify-items:center align-items:center center h-full  sm:ml-12 ml-3 ">
        <div className="w-full min-h-screen p-2">
          <div className="w-full min-h-screen ">
            <Button className="mt-3">Room Allotments</Button>
            <div className=" w-full h-full ">
              <div className="flex px-4  w-full h-full ">
                <span className="sm:mt-4 mt-2"><Image alt="ss" src={lightning} height={20} width={20}></Image></span>
                <span className="ml-2 text-wrap text-base sm:text-xl sm:m-3 m-1">
                The mock hostel room allotment will be held on 9th and 10th April 2024 from 10.00 am to 11.55 pm.
                </span>
              </div>
              <hr />
              <div className="flex px-4  w-full h-full my-1">
              <span className="sm:mt-4 mt-2"><Image alt="ss" src={lightning} height={20} width={20}></Image></span>
                <span className=" ml-2 text-wrap text-base sm:text-xl sm:m-3 m-1">
                  The live hostel room allotment will be held on 12th April, 2024 from 10.00 am to 11.55 pm.
                </span>
              </div>
              <hr />
              <div className="flex px-4  w-full h-full">
              <span className="sm:mt-4 mt-2"><Image alt="ss" src={lightning} height={20} width={20}></Image></span>
                <span className="ml-2 text-wrap text-base sm:text-xl sm:m-3 m-1">
                Hostel Counselling Portal link
                </span>
              </div>
            </div>

            <Button className="mt-3">Mess</Button>
            <div className=" w-full h-full ">
              <div className="flex px-4  w-full h-full ">
              <span className="sm:mt-4 mt-2"><Image alt="ss" src={lightning} height={20} width={20}></Image></span>
                <span className="ml-2 text-wrap text-base sm:text-xl sm:m-3 m-1">
                  Mess Committee Meeting on 15th April 2024 at 7.00 pm.
                </span>
              </div>
              <hr />
              <div className="flex px-4  w-full h-full">
              <span className="sm:mt-4 mt-2"><Image alt="ss" src={lightning} height={20} width={20}></Image></span>
                <span className="ml-2 text-wrap text-base sm:text-xl sm:m-3 m-1">
                Mess change option will be enabled from 1st May 2024.
                </span>
              </div>
            </div>

            <Button className="mt-3">Games</Button>
            <div className=" w-full h-full ">
              <div className="flex px-4  w-full h-full ">
              <span className="sm:mt-4 mt-2"><Image alt="ss" src={lightning} height={20} width={20}></Image></span>
                <span className="ml-2 text-wrap text-base sm:text-xl sm:m-3 m-1">
                Game services are disabled till 15th May due to construction work in Gymnasium area.
                </span>
              </div>
              <hr />
            </div>

            <Button className="mt-3">Laundry</Button>
            <div className=" w-full h-full ">
              <div className="flex px-4  w-full h-full ">
              <span className="sm:mt-4 mt-2"><Image alt="ss" src={lightning} height={20} width={20}></Image></span>
                <span className="ml-2 text-wrap text-base sm:text-xl sm:m-3 m-1">
                  April's laundry service schedule link
                </span>
              </div>
              <div className="flex px-4  w-full h-full my-1">
              <span className="sm:mt-4 mt-2"><Image alt="ss" src={lightning} height={20} width={20}></Image></span>
                <span className=" ml-2 text-wrap text-base sm:text-xl sm:m-3 m-1">
                  Laundry service not available on 9th and 11th April, 2024.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
