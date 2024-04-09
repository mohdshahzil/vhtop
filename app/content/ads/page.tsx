"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import music from "@/assets/events/music.jpg";
import party from "@/assets/events/party.jpg";

import astronaut from "@/assets/events/astronaut.jpg";
import chicago from "@/assets/events/chicago.jpg";
import cinema from "@/assets/events/cinema.jpg";
import qontinent from "@/assets/events/qontinent.jpg";
import series from "@/assets/events/series.jpg";
import styles from "@/assets/events/styles.jpg";
import wakeup from "@/assets/events/wakeup.jpg";
const Page = () => {
  const slides = [music, party, party, music, music, party];
  const gridSlides = [
    { src: astronaut, heading: "Astronaut" },
    { src: chicago, heading: "Chicago" },
    { src: cinema, heading: "Cinema" },
    { src: qontinent, heading: "Qontinent" },
    { src: series, heading: "Series" },
    { src: styles, heading: "Styles" },
    { src: wakeup, heading: "Wakeup" },
  ];
  const itemsPerPage = 2; // Number of items per page
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(slides.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, slides.length);

  const previousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  return (
    <div>
      <AppbarLogin />
      <Sidebar />
      <div className="flex flex-col sm:ml-12 ml-3 ">
        <div className="text-primary text-4xl font-medium sm:m-4 ml-6 p-2">
          Current Happenings
        </div>

        <div className="m-9 overflow-hidden">
          <div className="relative ">
            <div className="flex sm:flex-row flex-col transition ease-out duration-40">
              {slides.slice(startIndex, endIndex).map((s, index) => (
                <div key={index} className="sm:mr-4 mt-3 sm:w-1/2">
                  <Image
                    src={s}
                    alt={`Slide ${index}`}
                    width={800}
                    height={400}
                  />
                </div>
              ))}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-8 text-3xl">
              <button onClick={previousPage} disabled={currentPage === 0}>
                <BsFillArrowLeftCircleFill />
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
              >
                <BsFillArrowRightCircleFill />
              </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
              {Array.from({ length: totalPages }, (_, i) => (
                <div
                  onClick={() => setCurrentPage(i)}
                  key={`circle${i}`}
                  className={`rounded-full w-5 h-5 cursor-pointer ${
                    i === currentPage ? "bg-white" : "bg-gray-500"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          {gridSlides.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <h1 className="m-2 text-center text-3xl sm:text-4xl">{item.heading}</h1>
              <div className="flex justify-center">
                <Image
                  src={item.src}
                  alt={`Slide ${index}`}
                  width={400}
                  height={200}
                  layout="fixed"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
