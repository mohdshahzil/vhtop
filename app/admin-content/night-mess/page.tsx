"use client";
import React, { useState, useEffect } from "react";
import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import getNightMessData from "@/app/Hooks/getNightMess"; // Import the getNightMessData function

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
  ); // State to store fetched data

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Call the getNightMessData function
        const data = await getNightMessData();
        setNightMessData(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching Night Mess data:", error);
      }
    };

    // Call fetchData function when the component mounts
    fetchData();

    // Clean-up function (optional)
    return () => {
      // Perform clean-up actions if needed
    };
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
      <AppbarAdmin />
      <AdminSidebar />
      {/* Render fetched data */}
      {nightMessData && (
        <div>
          {/* Render the fetched data here */}
          {nightMessData.map((data, index) => (
            <div className="mt-24 ml-24" key={index}>
              <p>Price: {data.Price}</p>
              <p>Items: {data.Items}</p>
              <p>Paid: {data.paid.toString()}</p>
              <p>order no: {data.regNo}</p>
              <p>quantity: {data.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
