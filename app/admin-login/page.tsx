import React from "react";
import AppbarNoLogin from "@/components/Appbar/AppbarNoLogin";
import Footer from "@/components/Footer";
import AdminLogin from "@/components/LoginForm/AdminLoginForm";
const page = () => {
  return (
    <div>
      <AppbarNoLogin></AppbarNoLogin>
      <AdminLogin></AdminLogin>
      <Footer />
    </div>
  );
};

export default page;