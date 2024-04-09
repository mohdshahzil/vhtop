import React from "react";
import warning from "@/assets/warning.png";
import studyHub from "@/assets/studyHub.png";
import chotadhobi from "@/assets/chotadhobi.png";
import food from "@/assets/food.png";
import complaints from "@/assets/complaints.png";
import nightmess from "@/assets/nightmess.png";
import found from "@/assets/found.png";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
const links = [
  {
    href: "/admin-content/chota-dhobi",
    src: chotadhobi,
    alt: "chotadhobi",
    tooltip: "Chota Dhobi",
  },
  { href: "/admin-content/food-park", src: food, alt: "foodpark", tooltip: "Food Park" },
  { href: "/admin-content/Found", src: found, alt: "found", tooltip: "Found" },
  {
    href: "/admin-content/night-mess",
    src: nightmess,
    alt: "night-mess",
    tooltip: "night-mess",
  },
  {
    href: "/admin-content/photocopy",
    src: studyHub,
    alt: "photocopy",
    tooltip: "photocopy",
  },
  {
    href: "/admin-content/warning",
    src: warning,
    alt: "warning",
    tooltip: "Warning",
  },
  {
    href: "/admin-content/complaints",
    src: complaints,
    alt: "complaints",
    tooltip: "Complaints",
  },
];
const AdminSidebar = () => {
  return (
    <div className=" items-center h-auto  w-10 absolute left-0 flex flex-col p-2 gap-6">
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

export default AdminSidebar;
