"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import firebase from "firebase/app";
import "firebase/firestore";
import vitclogo from "@/public/vitclogo.png";
import storeXeroxRequest from "@/app/Hooks/storeXeroxrequest";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";

interface XeroxRequest {
  regNumber: string;
  location: string;
  collected: boolean;
}

const XeroxService: React.FC = () => {
  const [regNumber, setRegNumber] = useState<string>("");
  const [location, setLocation] = useState<string>("AB1");
  const [error, setError] = useState<string | null>(null);

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

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
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Vellore Institute of technology",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: vitclogo,
      handler: function (response: {
        razorpay_payment_id: any;
        razorpay_order_id: any;
        razorpay_signature: any;
      }) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };
  const handleSubmit = async () => {
    if (regNumber) {
      const newRequest: XeroxRequest = {
        regNumber,
        location,
        collected: false,
      };

      try {
        await storeXeroxRequest(location, newRequest);
        setRegNumber("");
        makePayment();
      } catch (error) {
        console.error("Error storing Xerox request:", error);
        setError("Failed to submit Xerox request. Please try again later.");
      }
    }
  };

  const handleRegNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegNumber(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <AppbarLogin />
      <Sidebar />
      <div className="flex flex-col sm:ml-12 ml-3">
        <h2 className="text-primary text-4xl font-medium m-4">Xerox Service</h2>
        {error && <div className="text-red-600">{error}</div>}
        <div className="flex flex-col gap-3 m-4">
          <Input
            type="text"
            placeholder="Registration Number"
            value={regNumber}
            onChange={handleRegNumberChange}
          />
          <div>
            <label htmlFor="location">Choose a location:</label>
            <select id="location" value={location} onChange={handleLocationChange}>
              <option value="AB1">AB1</option>
              <option value="AB2">AB2</option>
            </select>
          </div>
          <Input type="file" /> {/* Keep the file input field */}
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default XeroxService;
