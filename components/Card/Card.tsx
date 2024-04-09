import Image, { StaticImageData } from "next/image";
import React from "react";
import achievement from "@/assets/achievement.png";

interface CardProps {
  title: string;
  content: string[];
  icon: StaticImageData;
}

const Card: React.FC<CardProps> = ({ title, content, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md h-fit sm:ml-4 md:w-1/2">
      <div className="p-2 bg-slate-200">
        <h2 className="text-black">{title}</h2>
      </div>
      <div className="text-black p-4 ">
        {content.map((item, index) => (
          <div key={index} className="flex p-2">
            <div className="flex-shrink-0 h-6 mt-1">
              <Image src={icon} alt="icon" width={20} height={20} />
            </div>
            <div className="ml-2">{item}</div>
             
          </div>
        ))}
      </div>
      <br/>  
    </div>
  );
};

export default Card;
