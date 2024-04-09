"use client";
import React, { useState } from "react";
import AppbarAdmin from "@/components/Appbar/AppbarAdmin";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
const page = () => {
  return (
    <div>
      <AppbarAdmin></AppbarAdmin>
      <AdminSidebar></AdminSidebar>
    </div>
  );
};

export default page;
