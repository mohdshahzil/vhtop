"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import firebase from "firebase/app";
import "firebase/firestore";
import vitclogo from "@/public/vitclogo.png";
import app from "@/firebase.config";
import retrieveXeroxRequests from "@/app/Hooks/getXeroxdata";
import { getFirestore, collection } from "firebase/firestore";

interface XeroxRequest {
  regNumber: string;
  location: string;
  collected: boolean;
}

const XeroxService: React.FC = () => {
  const [requests, setRequests] = useState<XeroxRequest[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [waitingCount, setWaitingCount] = useState<{ [key: string]: number }>({
    AB1: 0,
    AB2: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedRequests = await retrieveXeroxRequests();
        setRequests(fetchedRequests);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCollectRequest = (index: number) => {
    const updatedRequests = [...requests];
    const collectedLocation = updatedRequests[index].location;

    updatedRequests.splice(index, 1);

    setRequests(updatedRequests);

    setWaitingCount((prevCount) => ({
      ...prevCount,
      [collectedLocation]: Math.max(0, prevCount[collectedLocation] - 1),
    }));

    // Update Firestore
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };

  const waitingOrdersAB1 = requests.filter(
    (request) => request.location === "AB1" && !request.collected
  ).length;
  const waitingOrdersAB2 = requests.filter(
    (request) => request.location === "AB2" && !request.collected
  ).length;

  return (
    <div>
      <AppbarAdmin />
      <AdminSidebar />
      <div className="flex flex-col sm:ml-12 ml-3">
        <h2 className="text-primary text-4xl font-medium m-4">Xerox Service</h2>
        <div className="flex flex-col gap-3 m-4">
          <h2 className="text-primary text-2xl font-medium">Waiting List:</h2>
          <ul>
            {requests
              .filter(
                (request) =>
                  request.regNumber &&
                  request.regNumber
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
              )
              .map((request, index) => (
                <li key={index}>
                  Reg. Number: {request.regNumber}, Location: {request.location}
                  {!request.collected && (
                    <button
                      onClick={() => handleCollectRequest(index)}
                      className="px-4 py-2 bg-primary text-white rounded-md ml-4 mt-2"
                    >
                      Collect
                    </button>
                  )}
                </li>
              ))}
          </ul>
        </div>
        <div className="mx-4 mt-4 grid gap-3">
          <h2 className="text-primary text-2xl font-medium">
            Number of Orders (Waiting):
          </h2>
          <p>AB1: {waitingOrdersAB1}</p>
          <p>AB2: {waitingOrdersAB2}</p>
        </div>
      </div>
    </div>
  );
};

export default XeroxService;
