import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import employee from "@/assets/employee.png";
import students from "@/assets/students.png";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="flex items-center justify-around">
      <div className=" w-1/3">
        <Link href="/student-login">
          <Card>
            <CardContent className="flex items-center justify-center p-2">
              <Image
                src={students}
                alt="students"
                width={100}
                height={100}
              ></Image>
            </CardContent>
            <CardFooter className="flex items-center justify-center p-2">
              <p className="text-2xl text-primary font-medium">Student</p>
            </CardFooter>
          </Card>
        </Link>
      </div>
      <div className="  w-1/3">
        <Link href="/admin-login">
          <Card>
            <CardContent className="flex items-center justify-center p-2">
              <Image
                src={employee}
                alt="employee"
                width={100}
                height={100}
              ></Image>
            </CardContent>
            <CardFooter className="flex items-center justify-center p-2">
              <p className="text-2xl text-primary font-medium">Employee</p>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
