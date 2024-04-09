"use client";
import React, { useState } from "react";
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
interface FoodItem {
  title: string;
  price: string;
  image: StaticImageData; // StaticImageData type for Next.js Image component
}

interface FoodItemsProps {
  title: string; // Add a prop for the title
  foodItems: FoodItem[];
}

const FoodItems: React.FC<FoodItemsProps> = ({ title, foodItems }) => {
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // Initialize quantity to 1
  const [totalPrice, setTotalPrice] = useState<number>(0);
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
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
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
  const handleCardClick = (item: FoodItem) => {
    setSelectedItem(item);
    setQuantity(1); // Reset quantity when a new item is selected
    setTotalPrice(parseFloat(item.price)); // Initialize total price based on item price
  };

  const handleIncrement = () => {
    if (selectedItem) {
      setQuantity(quantity + 1);
      setTotalPrice(totalPrice + parseFloat(selectedItem.price));
      console.log(totalPrice);
    }
  };

  const handleDecrement = () => {
    if (selectedItem && quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - parseFloat(selectedItem.price));
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
                  <CardDescription>{item.price}</CardDescription>
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
            <Button onClick={() => makePayment()}>Pay now</Button>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default FoodItems;
