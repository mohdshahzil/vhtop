"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface SubjectItem {
  title: string;
  code: string;
  link: string; // Add a field for the link
}

interface SubjectsProps {
  title: string;
  subItems: SubjectItem[];
}

const SubjectItems: React.FC<SubjectsProps> = ({ title, subItems }) => {
  const [selectedItem, setSelectedItem] = useState<SubjectItem | null>(null);

  const handleCardClick = (item: SubjectItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="m-4">
      <div className="text-2xl">{title}</div>
      <Dialog>
        <DialogTrigger>
          <div className="py-4 grid grid-cols-2 md:grid-cols-6 gap-2">
            {subItems.map((item, index) => (
              <Card
                key={index}
                className="w-[170px] md:w-[220px]"
                onClick={() => handleCardClick(item)}
              >
                <CardHeader className="flex flex-col">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.code}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">Link</a>
                </CardContent>
                <CardFooter className="flex justify-between"></CardFooter>
              </Card>
            ))}
          </div>
        </DialogTrigger>
        {selectedItem && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
              <DialogDescription>{selectedItem.code}</DialogDescription>
              <DialogDescription><Link href={selectedItem.code}>Access Materials here</Link></DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default SubjectItems;
