import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import the list of emergency contacts from the file
import emergencyContacts, { EmergencyContact } from "./EmergencyContacts";

const Page = () => {
  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <div className="flex flex-col sm:ml-12 ml-3">
        <div className="flex items-center justify-between text-primary text-4xl font-medium m-4">
          <p>Hostel Staff Emergency Contact Details</p>
        </div>
        <div className="py-4 grid grid-cols-2 md:grid-cols-6 gap-2">
          {emergencyContacts.map((contact: EmergencyContact, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{contact.designation}</CardTitle>
                <CardDescription>{contact.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{contact.contact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
