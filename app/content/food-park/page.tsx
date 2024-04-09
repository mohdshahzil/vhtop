import React from "react";
import AppbarLogin from "@/components/Appbar/AppbarLogin";
import Sidebar from "@/components/Sidebar/Sidebar";
import FoodItems from "@/components/FoodItems/FoodItems";
import { foodVegData } from "./FoodVegData";
import { foodNonVegData } from "./FoodNonVegData";
import { foodDessertData } from "./FoodDessertData";
const page = () => {
  return (
    <div>
      <AppbarLogin></AppbarLogin>
      <Sidebar></Sidebar>
      <div className="flex flex-col sm:ml-12 ml-3">
        <div className="flex items-center justify-between text-primary text-4xl font-medium m-4">
          <p>Food Park : Premium Food</p>
          <div>CART ICON</div>
        </div>
        {/* <p className="text-gray-500 mx-4 text-xl">
          <span className="text-gray-500">Description: </span>
          Night Mess is operated between 10:30 p.m to 1:00 a.m.
        </p> */}
        <FoodItems title="Veg Items" foodItems={foodVegData} /> 
        <FoodItems title="Non-Veg Items" foodItems={foodNonVegData} /> 
        <FoodItems title="Dessert" foodItems={foodDessertData} /> 

      </div>
    </div>
  );
};

export default page;


