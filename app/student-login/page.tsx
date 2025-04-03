import React from "react";
import AppbarNoLogin from "@/components/Appbar/AppbarNoLogin";
import Footer from "@/components/Footer";
import Login from "@/components/LoginForm/Loginform";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
const page = () => {
  return (
    <div>
      <AppbarNoLogin></AppbarNoLogin>
      <Login />
      <Footer />
    </div>
  );
};

export default page;
