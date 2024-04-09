import React from "react";
import calling from "@/assets/calling.png";

import chatbot from "@/assets/chatbot.png";
import studyHub from "@/assets/studyHub.png";
import food from "@/assets/food.png";
import photocopy from "@/assets/photocopy.png";
import carsharing from "@/assets/car-sharing.png";
import complaints from "@/assets/complaints.png";
import ads from "@/assets/ads.png";
import nightmess from "@/assets/nightmess.png";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const links = [
  {
    href: "/content/complaints",
    src: complaints,
    alt: "complaints",
    tooltip: "Complaints",
  },
  {
    href: "/content/contacts",
    src: calling,
    alt: "contacts",
    tooltip: "Contacts",
  },
  {
    href: "/content/food-park",
    src: food,
    alt: "Food Park",
    tooltip: "Food Park",
  },
  // {
  //   href: "/content/laundry",
  //   src: sports,
  //   alt: "laundary",
  //   tooltip: "Laundry",
  // },
  {
    href: "/content/night-mess",
    src: nightmess,
    alt: "Night Mess",
    tooltip: "Night Mess",
  },
  {
    href: "/content/study-hub",
    src: studyHub,
    alt: "contacts",
    tooltip: "Study Hub",
  },
  {
    href: "/content/vshare",
    src: carsharing,
    alt: "contacts",
    tooltip: "VShare",
  },
  { href: "/content/v-chat", src: chatbot, alt: "vchat", tooltip: "VChat" },
  { href: "/content/ads", src: ads, alt: "ads", tooltip: "Advertisement" },
  {
    href: "/content/photocopy",
    src: photocopy,
    alt: "photocopy",
    tooltip: "PhotoCopy",
  },
];
const Sidebar = () => {
  return (
    <div className=" items-center h-auto w-10 absolute left-0 flex flex-col p-2 gap-6">
      <TooltipProvider delayDuration={10}>
        {links.map(({ href, src, alt, tooltip }, index) => (
          <Link key={index} href={href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Image src={src} height={30} width={30} alt={alt} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default Sidebar;
