"use client";
import React, { useState } from "react";
import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Person {
  name: string;
  roomNumber: string;
  regNumber: string;
  laundryDay: string;
  accepted: boolean;
}

const Page: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);
  const [inWashList, setInWashList] = useState<Person[]>([]);
  const [filteredInWashList, setFilteredInWashList] = useState<Person[]>([]);
  const [acceptedRegistrations, setAcceptedRegistrations] = useState<string[]>(
    []
  );

  
  const people: Person[] = [
    {
      name: "John Doe",
      roomNumber: "101",
      regNumber: "REG001",
      laundryDay: "Monday",
      accepted: false,
    },
    {
      name: "Jane Smith",
      roomNumber: "102",
      regNumber: "REG002",
      laundryDay: "Tuesday",
      accepted: false,
    },
    {
      name: "Alice Johnson",
      roomNumber: "103",
      regNumber: "REG003",
      laundryDay: "Wednesday",
      accepted: false,
    },
    {
      name: "Shahzil",
      roomNumber: "103",
      regNumber: "1161",
      laundryDay: "Sunday",
      accepted: false,
    },
    // Add more people as needed
  ];

  // Function to handle search input change for main list
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    // Filter people based on registration number
    const filtered = people
      .filter((person) =>
        person.regNumber.toLowerCase().includes(inputValue.toLowerCase())
      )
      .filter((person) => !acceptedRegistrations.includes(person.regNumber));
    setFilteredPeople(filtered);
  };

  // Function to handle search input change for "In Wash" list
  const handleInWashSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    // Filter "In Wash" list based on registration number
    const filtered = inWashList.filter((person) =>
      person.regNumber.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredInWashList(filtered);
  };

  // Function to handle accepting laundry
  const handleAcceptLaundry = (person: Person) => {
    setInWashList((prevList) => [...prevList, person]);
    setAcceptedRegistrations((prevRegistrations) => [
      ...prevRegistrations,
      person.regNumber,
    ]);
    setFilteredPeople((prevList) =>
      prevList.filter((p) => p.regNumber !== person.regNumber)
    );
  };

  // Function to handle returning laundry
  // const handleReturnLaundry = (person: Person) => {
  //   setInWashList((prevList) =>
  //     prevList.filter((p) => p.regNumber !== person.regNumber)
  //   );
  //   setAcceptedRegistrations((prevRegistrations) =>
  //     prevRegistrations.filter((regNumber) => regNumber !== person.regNumber)
  //   );
  // };
  const handleReturnLaundry = (regNumber: string) => {
    setInWashList((prevList) =>
      prevList.filter((person) => person.regNumber !== regNumber)
    );
    setFilteredInWashList((prevList) =>
      prevList.filter((person) => person.regNumber !== regNumber)
    );
  };

  // Get the current day of the week
  const today = new Date().toLocaleString("en-us", { weekday: "long" });

  return (
    <div>
      <AppbarAdmin />
      <AdminSidebar />
      <div className="flex flex-col sm:ml-12 ml-3">
        <div className="text-primary text-4xl font-medium m-4">Chota-Dhobi</div>
        <p className="text-gray-500 mx-4 text-xl">
          Search using Registration Number
        </p>
        <div className="flex md:flex-row flex-col gap-3 m-4">
          <Input
            type="text"
            placeholder="Registration Number"
            value={searchInput}
            onChange={handleSearchInputChange}
            className="w-1/2"
          />
        </div>
        <div className="mx-4 ">
          <ul className="grid gap-4 text-lg ">
            {filteredPeople.length > 0
              ? filteredPeople.map((person, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-start ${
                      person.accepted
                        ? "text-gray-500"
                        : person.laundryDay === today
                        ? "text-primary font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    {person.name} - Room: {person.roomNumber} - Reg. No:{" "}
                    {person.regNumber}
                    {!person.accepted && (
                      <Button
                        className="ml-8"
                        onClick={() => handleAcceptLaundry(person)}
                      >
                        Accept
                      </Button>
                    )}
                  </li>
                ))
              : searchInput && <li>No results found</li>}
          </ul>
        </div>
        <div className="mx-4 mt-4 grid gap-3">
          <h2 className="text-primary text-2xl font-medium">
            Currently In Wash
          </h2>
          <div>
            <Input
              type="text"
              placeholder="Registration Number"
              onChange={handleInWashSearchInputChange}
            />
          </div>
          <ul>
            {filteredInWashList.length > 0
              ? filteredInWashList.map((person, index) => (
                  <li key={index}>
                    {person.name} - Room: {person.roomNumber} - Reg. No:{" "}
                    {person.regNumber}
                    <Button
                      className="ml-2"
                      onClick={() => handleReturnLaundry(person.regNumber)}
                    >
                      Return
                    </Button>
                  </li>
                ))
              : inWashList.length === 0 && <li>No items in wash</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
