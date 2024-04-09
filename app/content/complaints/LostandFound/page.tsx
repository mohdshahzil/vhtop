"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Textarea } from "@/components/ui/textarea";

interface HostelItems {
  [key: string]: string[];
}

interface FormData {
  category: string;
  subcategory: string;
  hostelBlockName: string;
  hostelRoomNumber: string;
  registrationNumber: string;
  description: string;
  file: File | null;
}

function InputDemo({
  type,
  name,
  value,
  handleChange,
}: {
  type: string;
  name: string;
  value: string;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  let placeholderText = "";
  if (type === "blockName") {
    placeholderText = "Enter Hostel Block Name";
  } else if (type === "roomNumber") {
    placeholderText = "Enter Room Number";
  } else if (type === "registrationNumber") {
    placeholderText = "Enter Registration Number";
  }

  return (
    <input
      type="text"
      name={name}
      value={value}
      placeholder={placeholderText}
      className="w-min border border-gray-600 p-2"
      onChange={handleChange}
      required
    />
  );
}

const Page: React.FC = () => {
  const hostelItems: HostelItems = {
    Keys: ["Room Keys", "Locker Keys"],
    Wallet: ["Black", "Brown"],
    "Mobile Phone": ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"],
    Laptop: ["Dell", "Lenovo", "Apple", "Samsung", "Hp", "ASUS"],
    "ID Card": ["Student ID", "Staff ID"],
  };

  const [formData, setFormData] = useState<FormData>(() => {
    if (typeof window !== "undefined") {
      const savedFormData = localStorage.getItem("formData");
      return savedFormData
        ? JSON.parse(savedFormData)
        : {
            category: "",
            subcategory: "",
            hostelBlockName: "",
            hostelRoomNumber: "",
            registrationNumber: "",
            description: "",
            file: null,
          };
    } else {
      return {
        category: "",
        subcategory: "",
        hostelBlockName: "",
        hostelRoomNumber: "",
        registrationNumber: "",
        description: "",
        file: null,
      };
    }
  });

  const [complaints, setComplaints] = useState<FormData[]>([]);

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, category: event.target.value, subcategory: "" });
  };

  const handleSubcategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, subcategory: event.target.value });
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFormData({ ...formData, file: event.target.files[0] });
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (
      formData.category &&
      formData.subcategory &&
      formData.hostelBlockName &&
      formData.hostelRoomNumber &&
      formData.registrationNumber &&
      formData.description
    ) {
      // Store the current formData in an array of complaints
      setComplaints([...complaints, formData]);

      // Check if localStorage is available before using it
      if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        // Storing formData in localStorage
        localStorage.setItem("formData", JSON.stringify(formData));

        // Storing complaints array in localStorage
        localStorage.setItem("complaints", JSON.stringify(complaints));
      }

      // Resetting formData state
      setFormData({
        category: "",
        subcategory: "",
        hostelBlockName: "",
        hostelRoomNumber: "",
        registrationNumber: "",
        description: "",
        file: null,
      });

      // Log the complaints array
      console.log("Complaints array:", complaints);
    } else {
      alert("Please fill out all required fields.");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFormData = localStorage.getItem("formData");
      if (savedFormData) {
        setFormData(JSON.parse(savedFormData));
      }

      const savedComplaints = localStorage.getItem("complaints");
      if (savedComplaints) {
        setComplaints(JSON.parse(savedComplaints));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      // Save formData to localStorage
      localStorage.setItem("formData", JSON.stringify(formData));

      // Save complaints array to localStorage
      localStorage.setItem("complaints", JSON.stringify(complaints));
    }
  }, [formData, complaints]);

  return (
    <div>
      <AppbarLogin />
      <Sidebar />
      <div className="sm:ml-16 sm:mt-10 mt-4 ml-8 flex justify-center ">
        <div className="mr-3 rounded-lg overflow-hidden w-full sm:w-4/5 border border-stone-500">
          <div className="bg-primary flex justify-center py-3">
            Create an incident
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap p-2">
              <div className="w-full sm:w-1/5">
                <div className="text-bold p-4">Category</div>
              </div>
              <div className="w-full sm:w-4/5 flex">
                <div className="w-full p-4">
                  <select
                    className="w-full border border-gray-600 p-2"
                    onChange={handleCategoryChange}
                    value={formData.category}
                    required
                  >
                    <option value="">Select Category</option>
                    {Object.keys(hostelItems).map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap p-2">
              <div className="w-full sm:w-1/5">
                <div className="text-bold p-4">Sub Category</div>
              </div>
              <div className="w-full sm:w-4/5 flex">
                <div className="w-full p-4">
                  <select
                    className="w-full border border-gray-600 p-2"
                    onChange={handleSubcategoryChange}
                    value={formData.subcategory}
                    required
                  >
                    <option value="">Select Sub Category</option>
                    {hostelItems[formData.category]?.map(
                      (subcategory, index) => (
                        <option key={index} value={subcategory}>
                          {subcategory}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap p-2">
              <div className="w-full sm:w-1/5">
                <div className="text-bold p-4">Hostel Block Name</div>
              </div>
              <div className="w-full sm:w-4/5 flex">
                <div className="w-full p-4">
                  <InputDemo
                    type="blockName"
                    name="hostelBlockName"
                    value={formData.hostelBlockName}
                    handleChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap p-2">
              <div className="w-full sm:w-1/5">
                <div className="text-bold p-4">Hostel Room Number</div>
              </div>
              <div className="w-full sm:w-4/5 flex">
                <div className="w-full p-4">
                  <InputDemo
                    type="roomNumber"
                    name="hostelRoomNumber"
                    value={formData.hostelRoomNumber}
                    handleChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap p-2">
              <div className="w-full sm:w-1/5">
                <div className="text-bold p-4">Registration Number</div>
              </div>
              <div className="w-full sm:w-4/5 flex">
                <div className="w-full p-4">
                  <InputDemo
                    type="registrationNumber"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    handleChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap p-2">
              <div className="w-full sm:w-1/5">
                <div className="text-bold p-4">Description(Max 2000 char)</div>
              </div>
              <div className="w-full sm:w-4/5 flex">
                <div className="w-full p-4">
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap p-2">
              <div className="w-full sm:w-1/5">
                <div className="text-bold p-4">Attach a file(if any)</div>
              </div>
              <div className="w-full sm:w-4/5 flex">
                <div className="w-full p-4">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add File
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf, image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap p-2">
              <div className="w-full sm:w-1/5"></div>
              <div className="w-full sm:w-4/5 flex">
                <div className="w-full p-4">
                  <button
                    type="submit"
                    className="bg-primary text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
