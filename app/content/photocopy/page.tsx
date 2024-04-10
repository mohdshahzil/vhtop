"use client"
import React, { useState, ChangeEvent } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import vitclogo from "@/public/vitclogo.png";
import storeXeroxRequest from "@/app/Hooks/storeXeroxrequest";
import { RazorpayResponse } from "razorpay-types";
import app from "@/firebase.config";
import { FirebaseApp } from "@firebase/app-types";

const storage = getStorage(app as FirebaseApp);

interface XeroxRequest {
  regNumber: string;
  location: string;
  collected: boolean;
}

const XeroxService: React.FC = () => {
  const [regNumber, setRegNumber] = useState<string>("");
  const [location, setLocation] = useState<string>("AB1");
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile || null);
  };

  const initializeRazorpay = () => {
    return new Promise<boolean>((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay1", { method: "POST" }).then((t) =>
      t.json()
    );

    const options = {
      key: process.env.RAZORPAY_KEY || "", 
      name: "Vellore Institute of technology",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank you for your test donation",
      image: vitclogo,
      handler: function (response: RazorpayResponse) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Kanishk Sharma",
        email: "kanishksharma2609@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = async () => {
    if (regNumber && file) {
      const storageRef = ref(storage, `${regNumber}/${file.name}`);
      uploadBytes(storageRef, file).then(() => {
        console.log("Uploaded");
        const newRequest: XeroxRequest = {
          regNumber,
          location,
          collected: false,
        };

        try {
          storeXeroxRequest(location, newRequest);
          setRegNumber("");
          setFile(null);
          makePayment();
        } catch (error) {
          console.error("Error storing Xerox request:", error);
          setError("Failed to submit Xerox request. Please try again later.");
        }
      });
    } else {
      setError("Please provide both registration number and file.");
    }
  };

  const handleRegNumberChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setRegNumber(event.target.value);
  };

  const handleLocationChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <AppbarLogin />
      <Sidebar />
      <div className="flex flex-col sm:ml-12 ml-3">
        <h2 className="text-primary text-4xl font-medium sm:m-4 ml-10 mb-2">
          Photocopy Service
        </h2>
        {error && <div className="text-red-600">{error}</div>}
        <div className="flex flex-col items-center justify-center gap-3 sm:m-4 ml-10 h-full">
          <Input
            type="text"
            placeholder="Registration Number"
            value={regNumber}
            onChange={handleRegNumberChange}
            className="w-1/2"
          />
          <div className="w-1/2 ml-1 flex">
            <label htmlFor="location">Choose a location:</label>
            <select
              id="location"
              value={location}
              onChange={handleLocationChange}
            >
              <option value="AB1">AB1</option>
              <option value="AB2">AB2</option>
            </select>
          </div>
          <Input
            type="file"
            className="w-1/2"
            onChange={(event) => handleFileChange(event)}
          />
          <Button onClick={handleSubmit} className="w-1/2">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default XeroxService;
