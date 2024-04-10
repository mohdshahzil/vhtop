"use client";
import React, { useState, useEffect } from "react";
import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import getNightMessData from "@/app/Hooks/getNightMess";

interface NightMessData {
  Price: number;
  Items: string;
  paid: boolean;
  regNo: string;
  quantity: number;
}

const Page: React.FC = () => {
  const [nightMessData, setNightMessData] = useState<NightMessData[] | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNightMessData();
        setNightMessData(data);
      } catch (error) {
        console.error("Error fetching Night Mess data:", error);
      }
    };

    fetchData();

    return () => {
      // Perform clean-up actions if needed
    };
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
      <AppbarAdmin />
      <AdminSidebar />
      {/* Render fetched data */}
      <h1 className="ml-12  mt-6 text-3xl flex justify-center">
        Night Mess Orders
      </h1>
      {nightMessData && (
        <div className="mt-24 ml-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {nightMessData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-300 rounded-md"
            >
              <div className="p-4">
                <p className="font-semibold">Price: {item.Price}</p>
                <p>Items: {item.Items}</p>
              </div>
              <div className="p-4 mt-auto">
                <p>Paid: {item.paid.toString()}</p>
                <p>Order no: {item.regNo}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
