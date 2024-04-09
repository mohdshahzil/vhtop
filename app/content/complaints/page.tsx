"use client";
import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function InputDemo() {
  return (
    <Input type="text" placeholder="Enter Ticket Number" className="w-min" />
  );
}
const page = () => {
  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <div className="sm:ml-16  sm:mt-10 mt-4 ml-8 flex justify-center ">
        <div className="mr-3 rounded-lg overflow-hidden w-full sm:w-3/4 border border-stone-500">
          <div className="bg-primary flex justify-center py-3 ">User-home</div>
          <div className="p-3">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-3/5 border border-stone-300 mb-3 sm:mb-0 py-2 px-3">
                Search by Ticket#
              </div>
              <div className="w-full sm:w-3/4 p-3 flex flex-col sm:flex-row border border-stone-300">
                <InputDemo />
                <Button className="ml-0 sm:ml-3 mt-2 sm:mt-0">Search</Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-3/5 border border-stone-300 mb-3 sm:mb-0 py-2 px-3 mt-3 sm:mt-0 ">
                Create Ticket for hostel complaints
              </div>
              <div className="w-full sm:w-3/4 p-3 border border-stone-300">
                <Link href="/content/complaints/newComplaints">
                  <Button className="m-2">Create Tickets</Button>
                </Link>

                <Button>View Tickets</Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-3/5 border border-stone-300 mb-3 sm:mb-0 py-2 px-3 mt-3 sm:mt-0 ">
                Create Ticket for Lost
              </div>
              <div className="w-full sm:w-3/4 p-3 border border-stone-300">
                <Link href="/content/complaints/LostandFound">
                  <Button className="m-2">Create Tickets</Button>
                </Link>

                <Button>View Tickets</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
