"use client";
import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import useUserStore from "@/app/store/store";

export default function page() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="bg-gray-200 min-h-screen">
      <AppbarLogin />
      <Sidebar />
      <div className="flex flex-col items-center mt-4 container mx-auto">
        <div className="text-3xl mb-4">My Info</div>

        <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <tbody>
              <tr className="bg-gray-100">
                <td className="py-2 px-4 font-semibold">
                  Registration Number:
                </td>
                <td className="py-2 px-4">{user.regNo}</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="py-2 px-4 font-semibold">Name:</td>
                <td className="py-2 px-4">{user.name}</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="py-2 px-4 font-semibold">Block Name:</td>
                <td className="py-2 px-4">{user.block}</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="py-2 px-4 font-semibold">Mess:</td>
                <td className="py-2 px-4">{user.mess}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
