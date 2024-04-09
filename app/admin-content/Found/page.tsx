"use client";
import React, { useState, useEffect } from "react";
import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";

interface Complaint {
  category: string;
  subcategory: string;
  hostelBlockName: string;
  hostelRoomNumber: string;
  registrationNumber: string;
  description: string;
}

const Page: React.FC = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [searchedComplaint, setSearchedComplaint] = useState<Complaint | null>(
    null
  );
  const [searchedRegistrationNumber, setSearchedRegistrationNumber] =
    useState<string>("");
  const [searched, setSearched] = useState<boolean>(false);

  useEffect(() => {
    const savedComplaints = localStorage.getItem("complaints");
    if (savedComplaints) {
      setComplaints(JSON.parse(savedComplaints));
    }
  }, []);

  const handleSearch = () => {
    const foundComplaint = complaints.find(
      (complaint) => complaint.registrationNumber === searchedRegistrationNumber
    );
    setSearchedComplaint(foundComplaint || null);
    setSearched(true);
  };

  return (
    <div>
      <AppbarAdmin />
      <AdminSidebar />
      <div className="flex flex-col sm:ml-12 ml-3 min-w-screen min-h-screen ">
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold mt-8 mb-4">
            Complaints raised for the Loss of Items
          </h1>
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Enter Registration Number"
            value={searchedRegistrationNumber}
            onChange={(e) => setSearchedRegistrationNumber(e.target.value)}
            className="border border-gray-300 p-2 mr-2"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {complaints.map((complaint, index) => (
            <div
              key={index}
              className={`rounded-lg border border-gray-300 p-4 m-4 shadow-md ${
                searched &&
                searchedComplaint?.registrationNumber !==
                  complaint.registrationNumber
                  ? "hidden"
                  : ""
              }`}
            >
              <div className="text-lg font-semibold mb-2">
                Category: {complaint.category}
              </div>
              <div className="text-lg mb-2">
                Subcategory: {complaint.subcategory}
              </div>
              <div className="text-lg mb-2">
                Hostel Block Name: {complaint.hostelBlockName}
              </div>
              <div className="text-lg mb-2">
                Hostel Room Number: {complaint.hostelRoomNumber}
              </div>
              <div className="text-lg mb-2">
                Registration Number: {complaint.registrationNumber}
              </div>
              <div className="text-lg mb-2">
                Description: {complaint.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
