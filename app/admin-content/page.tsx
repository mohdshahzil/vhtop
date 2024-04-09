import React from "react";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import AppbarAdmin from "@/components/Appbar/AppbarAdmin";

const page = () => {
  return (
    <div>
      <AppbarAdmin></AppbarAdmin>
      <AdminSidebar></AdminSidebar>
    </div>
  );
};

export default page;
