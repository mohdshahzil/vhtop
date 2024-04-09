"use client";
import React, { useState, useEffect } from "react";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
interface Student {
  name: string;
  registrationNumber: string;
  roomNumber: string;
}

interface Warning {
  registrationNumber: string;
  warnings: {
    description: string;
    timestamp: Date;
  }[];
}

const WarningManagementPage = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      name: "Mohammad Shahzil",
      registrationNumber: "22MIS1161",
      roomNumber: "327",
    },
    {
      name: "Yash Vardhan",
      registrationNumber: "22BCE1902",
      roomNumber: "327",
    },
    {
      name: "Hardik Hasani",
      registrationNumber: "22BCE1397",
      roomNumber: "208",
    },
    // Add more sample student data as needed
  ]);
  const [warnings, setWarnings] = useState<Warning[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [newWarning, setNewWarning] = useState<string>("");

  useEffect(() => {
    // Fetch warnings from backend or local storage
    // For demo purposes, initializing with some mock data
    const initialWarnings: Warning[] = students.map((student) => ({
      registrationNumber: student.registrationNumber,
      warnings: [],
    }));
    setWarnings(initialWarnings);
  }, [students]);

  const handleSearch = (query: string) => {
    const filtered = students.filter(
      (student) =>
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.registrationNumber.includes(query) ||
        student.roomNumber.includes(query)
    );
    setFilteredStudents(filtered);
  };

  const handleSelectStudent = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if a student is selected
    if (!selectedStudent) {
      console.log("Please select a student");
      return;
    }
    // Add new warning
    const newWarnings = warnings.map((warning) =>
      warning.registrationNumber === selectedStudent.registrationNumber
        ? {
            ...warning,
            warnings: [
              ...warning.warnings,
              {
                description: newWarning,
                timestamp: new Date(),
              },
            ],
          }
        : warning
    );
    setWarnings(newWarnings);
    // Reset form fields
    setNewWarning("");
  };

  return (
    <div>
      <AppbarAdmin></AppbarAdmin>
      <AdminSidebar></AdminSidebar>
      <div className="flex flex-col sm:ml-12 ml-3">
        <div className="flex items-center justify-between text-primary text-4xl font-medium m-4">
          <p>Warning Management</p>
        </div>
        <div className="m-4">
          {/* <input
            type="text"
            placeholder="Search by name, registration number, or room number"
            className=""
          /> */}
          <Input
            type="text"
            placeholder="Search by name, registration number, or room number"
            onChange={(e) => handleSearch(e.target.value)}
            className="w-1/2"
          />
          <ul className="grid gap-2 m-4 text-xl">
            {filteredStudents.map((student) => (
              <li key={student.registrationNumber}>
                <button onClick={() => handleSelectStudent(student)}>
                  {student.name} - {student.registrationNumber} -{" "}
                  {student.roomNumber}
                </button>
              </li>
            ))}
          </ul>
          {selectedStudent && (
            <div>
              <p className="font-bold">
                Selected Student: {selectedStudent.name}
              </p>
              <ul>
                {warnings
                  .find(
                    (warning) =>
                      warning.registrationNumber ===
                      selectedStudent.registrationNumber
                  )
                  ?.warnings.map((warning, index) => (
                    <li key={index}>
                      <p>
                        {warning.timestamp.toLocaleDateString()}:{" "}
                        {warning.description}
                      </p>
                    </li>
                  ))}
              </ul>
              <form onSubmit={handleSubmit} className="mt-4">
                <Textarea
                  value={newWarning}
                  onChange={(e) => setNewWarning(e.target.value)}
                  className=" p-2  m-2 rounded w-1/2"
                  placeholder="Description"
                />
                <Button type="submit">Create Warning</Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WarningManagementPage;
