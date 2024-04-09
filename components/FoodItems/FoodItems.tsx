"use client"
import React, { useState } from "react";
import useUserStore from "@/app/store/store";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import vitclogo from "@/public/vitclogo.png";
import storeNightMessData from "@/app/Hooks/storeNightMess"
interface FoodItem {
  title: string;
  price: number;
  image: StaticImageData;
}

interface FoodItemsProps {
  title: string;
  foodItems: FoodItem[];
}

const FoodItems: React.FC<FoodItemsProps> = ({ title, foodItems }) => {
  const user=useUserStore((state) => state.user);
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleCardClick = (item: FoodItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setTotalPrice(item.price); // Set the total price to the item's price directly
  };

  const handleIncrement = () => {
    if (selectedItem) {
      setQuantity(quantity + 1);
      setTotalPrice(totalPrice + selectedItem.price); // Increment total price by item's price
    }
  };

  const handleDecrement = () => {
    if (selectedItem && quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - selectedItem.price); // Decrement total price by item's price
    }
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

  const makePayment = async (totalPrice: number) => {
    console.log("here...");
    const res = await initializeRazorpay();
  
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
  
    try {
      const response = await fetch("/api/razorpay2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: totalPrice }), // Include the totalPrice in the request body
      });
  
      if (!response.ok) {
        throw new Error("Failed to create Razorpay order");
      }
  
      const data = await response.json();
      console.log(data);
      var options = {
        key: process.env.RAZORPAY_KEY,
        name: "Vellore Institute of technology",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for your test donation",
        image: vitclogo,
        handler: function (response: {
          razorpay_payment_id: any;
          razorpay_order_id: any;
          razorpay_signature: any;
        }) {
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
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      alert("Failed to create Razorpay order");
    }
  };
  const makePaymentandStore = async (totalPrice: number) => {
    try {
      // Check if a user is logged in
      if (!user) {
        // If the user is not logged in, you may handle this case according to your application logic
        alert("Please log in to make a payment.");
        return;
      }
      
      // Check if an item is selected
      if (!selectedItem) {
        alert("Please select an item before making a payment.");
        return;
      }
  
      // Call the storeNightMessData function with appropriate arguments
      await storeNightMessData(user.regNo, totalPrice, selectedItem.title, true,quantity);
  
      // Proceed with payment
      await makePayment(totalPrice);
    } catch (error) {
      console.error("Error making payment and storing data:", error);
      alert("Failed to make payment and store data.");
    }
  };
  

  return (
    <div className="m-4">
      <div className="text-2xl">{title}</div>
      <Dialog>
        <DialogTrigger>
          <div className="py-4 grid grid-cols-2 md:grid-cols-6 gap-2">
            {foodItems.map((item, index) => (
              <Card
                key={index}
                className="w-[170px] md:w-[220px]"
                onClick={() => handleCardClick(item)}
              >
                <CardHeader className="flex flex-col">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>Rs. {item.price} /-</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={150}
                    width={150}
                    className="rounded-md"
                  />
                </CardContent>
                <CardFooter className="flex justify-between"></CardFooter>
              </Card>
            ))}
          </div>
        </DialogTrigger>
        {selectedItem && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedItem.title}</DialogTitle>
              <DialogDescription>{selectedItem.price}</DialogDescription>
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                height={150}
                width={150}
                className="rounded-md"
              />
            </DialogHeader>
            <DialogFooter className="sm:justify-start items-center">
              <Button variant="outline" size="icon" onClick={handleDecrement}>
                -
              </Button>
              <p>{quantity}</p>
              <Button variant="outline" size="icon" onClick={handleIncrement}>
                +
              </Button>
              <p>Total Price: {totalPrice}</p>
            </DialogFooter>
            <Button onClick={() => makePaymentandStore(totalPrice)}>Pay now</Button>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default FoodItems;
