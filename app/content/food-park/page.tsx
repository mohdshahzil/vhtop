"use client";
import { frequentlyBoughtVegData } from "./RecommendedData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import FoodparkItems from "@/components/FoodItems/Foodparkitems";
import { foodVegData } from "./FoodVegData";
import { foodNonVegData } from "./FoodNonVegData";
import { foodDessertData } from "./FoodDessertData";

const Page: React.FC = () => {
  const [totalCredits, setTotalCredits] = useState<number>(6125);

  return (
    <div>
      <AppbarLogin />
      <Sidebar />
      <div className="flex flex-col sm:ml-12 ml-3">
        <div className="flex items-center justify-between text-primary text-4xl font-medium m-4">
          <p>Food Park : Premium Food</p>
          <div>credits: {totalCredits}</div>
        </div>
        <FoodparkItems
          title="Recommended Items"
          foodItems={frequentlyBoughtVegData}
          totalCredits={totalCredits}
          setTotalCredits={setTotalCredits}
        />
        <div className="m-4 flex flex-row items-center gap-4 font-medium ">
          {" "}
          <p className="text-xl">
            Click here to access the open-source recommendation system{" "}
          </p>
          <Link
            href="https://www.kaggle.com/code/mohammadshahzil/foodparkrecommendation"
            target="_blank"
          >
            <Button>Go to Kaggle</Button>
          </Link>
                  
        </div>
        <FoodparkItems
          title="Veg Items"
          foodItems={foodVegData}
          totalCredits={totalCredits}
          setTotalCredits={setTotalCredits}
        />
        <FoodparkItems
          title="Non-Veg Items"
          foodItems={foodNonVegData}
          totalCredits={totalCredits}
          setTotalCredits={setTotalCredits}
        />
        <FoodparkItems
          title="Dessert"
          foodItems={foodDessertData}
          totalCredits={totalCredits}
          setTotalCredits={setTotalCredits}
        />
      </div>
    </div>
  );
};

export default Page;
