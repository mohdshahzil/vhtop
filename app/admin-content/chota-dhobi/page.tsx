// "use client";
// import React, { useState } from "react";
// import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
// import AdminSidebar from "@/components/Sidebar/AdminSidebar";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// interface Person {
//   name: string;
//   roomNumber: string;
//   regNumber: string;
//   laundryDay: string;
//   accepted: boolean;
// }

// const Page: React.FC = () => {
//   const [searchInput, setSearchInput] = useState<string>("");
//   const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);
//   const [inWashList, setInWashList] = useState<Person[]>([]);
//   const [filteredInWashList, setFilteredInWashList] = useState<Person[]>([]);
//   const [acceptedRegistrations, setAcceptedRegistrations] = useState<string[]>(
//     []
//   );

//   const people: Person[] = [
//     {
//       name: "Aviral Srivastava",
//       roomNumber: "208",
//       regNumber: "22BAI1801",
//       laundryDay: "Monday",
//       accepted: false,
//     },
//     {
//       name: "Siddharth Tripathi",
//       roomNumber: "258",
//       regNumber: "22MIA1156",
//       laundryDay: "Tuesday",
//       accepted: false,
//     },
//     {
//       name: "Kanishk Sharma",
//       roomNumber: "327",
//       regNumber: "22BCE1416",
//       laundryDay: "Wednesday",
//       accepted: false,
//     },
//     {
//       name: "Mohammad Shahzil",
//       roomNumber: "327",
//       regNumber: "22MIS1161",
//       laundryDay: "Sunday",
//       accepted: false,
//     },
//     // Add more people as needed
//   ];

//   // Function to handle search input change for main list
//   const handleSearchInputChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const inputValue = event.target.value;
//     setSearchInput(inputValue);
//     // Filter people based on registration number
//     const filtered = people
//       .filter((person) =>
//         person.regNumber.toLowerCase().includes(inputValue.toLowerCase())
//       )
//       .filter((person) => !acceptedRegistrations.includes(person.regNumber));
//     setFilteredPeople(filtered);
//   };

//   // Function to handle search input change for "In Wash" list
//   const handleInWashSearchInputChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const inputValue = event.target.value;
//     // Filter "In Wash" list based on registration number
//     const filtered = inWashList.filter((person) =>
//       person.regNumber.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setFilteredInWashList(filtered);
//   };

//   // Function to handle accepting laundry
//   const handleAcceptLaundry = (person: Person) => {
//     setInWashList((prevList) => [...prevList, person]);
//     setAcceptedRegistrations((prevRegistrations) => [
//       ...prevRegistrations,
//       person.regNumber,
//     ]);
//     setFilteredPeople((prevList) =>
//       prevList.filter((p) => p.regNumber !== person.regNumber)
//     );
//   };

//   const handleReturnLaundry = (regNumber: string) => {
//     setInWashList((prevList) =>
//       prevList.filter((person) => person.regNumber !== regNumber)
//     );
//     setFilteredInWashList((prevList) =>
//       prevList.filter((person) => person.regNumber !== regNumber)
//     );
//   };

//   // Get the current day of the week
//   const today = new Date().toLocaleString("en-us", { weekday: "long" });

//   return (
//     <div>
//       <AppbarAdmin />
//       <AdminSidebar />
//       <div className="flex flex-col sm:ml-12 ml-3">
//         <div className="text-primary text-4xl font-medium m-4">Chota-Dhobi</div>
//         <p className="text-gray-500 mx-4 text-xl">
//           Search using Registration Number
//         </p>
//         <div className="flex md:flex-row flex-col gap-3 m-4">
//           <Input
//             type="text"
//             placeholder="Registration Number"
//             value={searchInput}
//             onChange={handleSearchInputChange}
//             className="w-1/2"
//           />
//         </div>
//         <div className="mx-4 ">
//           <ul className="grid gap-4 text-lg ">
//             {filteredPeople.length > 0
//               ? filteredPeople.map((person, index) => (
//                   <li
//                     key={index}
//                     className={`flex items-center justify-start gap-2 ${
//                       person.accepted
//                         ? "text-gray-500"
//                         : person.laundryDay === today
//                         ? "text-primary font-semibold"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     {person.name} - Room: {person.roomNumber} - Reg. No:{" "}
//                     {person.regNumber}
//                     <Input type="text" className="w-20" placeholder="Count" />
//                     {!person.accepted && (
//                       <Button
//                         className="ml-8"
//                         onClick={() => handleAcceptLaundry(person)}
//                       >
//                         Accept
//                       </Button>
//                     )}
//                   </li>
//                 ))
//               : searchInput && <li>No results found</li>}
//           </ul>
//         </div>
//         <div className="mx-4 mt-4 grid gap-3">
//           <h2 className="text-primary text-2xl font-medium">
//             Currently In Wash
//           </h2>
//           <div>
//             <Input
//               type="text"
//               placeholder="Registration Number"
//               onChange={handleInWashSearchInputChange}
//             />
//           </div>
//           <ul>
//             {filteredInWashList.length > 0
//               ? filteredInWashList.map((person, index) => (
//                   <li key={index}>
//                     {person.name} - Room: {person.roomNumber} - Reg. No:{" "}
//                     {person.regNumber}
//                     <Button
//                       className="ml-2"
//                       onClick={() => handleReturnLaundry(person.regNumber)}
//                     >
//                       Return
//                     </Button>
//                   </li>
//                 ))
//               : inWashList.length === 0 && <li>No items in wash</li>}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

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
  count: number; // New property for counting clothes
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
      name: "Aviral Srivastava",
      roomNumber: "208",
      regNumber: "22BAI1801",
      laundryDay: "Monday",
      accepted: false,
      count: 0, // Initialize count to 0
    },
    {
      name: "Siddharth Tripathi",
      roomNumber: "258",
      regNumber: "22MIA1156",
      laundryDay: "Tuesday",
      accepted: false,
      count: 0, // Initialize count to 0
    },
    {
      name: "Kanishk Sharma",
      roomNumber: "327",
      regNumber: "22BCE1416",
      laundryDay: "Wednesday",
      accepted: false,
      count: 0, // Initialize count to 0
    },
    {
      name: "Mohammad Shahzil",
      roomNumber: "327",
      regNumber: "22MIS1161",
      laundryDay: "Sunday",
      accepted: false,
      count: 0, // Initialize count to 0
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
        <div className="text-primary text-4xl font-medium sm:m-4 ml-8">Chota-Dhobi</div>
        <p className="text-gray-500 sm:mx-4 text-xl ml-8">
          Search using Registration Number
        </p>
        <div className="flex md:flex-row flex-col gap-3 m-4">
          <Input
            type="text"
            placeholder="Registration Number"
            value={searchInput}
            onChange={handleSearchInputChange}
            className="w-1/2 sm:ml-0 ml-6"
          />
        </div>
        <div className="mx-4 ">
          <ul className="grid gap-4 text-lg ">
            {filteredPeople.length > 0
              ? filteredPeople.map((person, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-start gap-2 ${
                      person.accepted
                        ? "text-gray-500"
                        : person.laundryDay === today
                        ? "text-primary font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    {person.name} - Room: {person.roomNumber} - Reg. No:{" "}
                    {person.regNumber}
                    <Input
                      type="number" // Change input type to number
                      className="w-20"
                      placeholder="Count"
                      value={person.count.toString()} // Bind input value to person's count
                      onChange={(e) => {
                        const count = parseInt(e.target.value);
                        if (!isNaN(count)) {
                          const updatedPeople = [...people];
                          updatedPeople[index] = {
                            ...person,
                            count: count,
                          };
                          setFilteredPeople(updatedPeople);
                        }
                      }}
                    />
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
          <h2 className="text-primary text-2xl font-medium sm:ml-0 ml-6">
            Currently In Wash
          </h2>
          <div>
            <Input
              type="text"
              placeholder="Registration Number"
              onChange={handleInWashSearchInputChange}
              className="sm:ml-0 ml-6 w-1/2"
            />
          </div>
          <ul>
            {filteredInWashList.length > 0
              ? filteredInWashList.map((person, index) => (
                  <li key={index} className="flex  items-center">
                    {person.name} - Room: {person.roomNumber} - Reg. No:{" "}
                    {person.regNumber}
                    <div className="m-2" >Clothes Count : {person.count}</div>
                    <Button
                      className="ml-2"
                      onClick={() => handleReturnLaundry(person.regNumber)}
                    >
                      Return
                    </Button>
                  </li>
                ))
              : inWashList.length === 0 && <li className="ml-4">No items in wash</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
