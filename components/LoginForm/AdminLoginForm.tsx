"use client"
import createAdminAndStoreEmail from "@/app/Hooks/AdminSignIn";
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import useUserStore from "@/app/store/store"
export default function AdminLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setUser = useUserStore((state) => state.setUser);
  const use=useUserStore((state)=>state.user);
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const usercreate = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const user = await createAdminAndStoreEmail();
    if (user){
      setUser(user);
      window.location.href="/admin-content"
    }
    console.log(use);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-lg lg:max-w-xl mb-40">
        <div className="w-full h-1 bg-primary mb-10"></div>
        <h1 className="font-bold text-center text-black text-3xl">VHTOP Login</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-primary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-primary"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-2">
            <button type="submit" className="w-full px-4 py-2 tracking-wide text-primary transition-colors duration-200 transform bg-primary text-white rounded-md hover:bg-primary hover:text-white focus:outline-none focus:bg-primary focus:text-white" onClick={(event) => usercreate(event)}>
              Login
            </button>
          </div>
        </form>
        <p className="mt-2 text-sm text-right text-white">
          <Link
            href="/forget"
            className="text-xs text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>
        </p>
        <p className="mt-2 text-sm text-right text-white">
          <Link
            href="/"
            className="text-xs text-green-600 hover:underline"
          >
            Return to Home Page
          </Link>
        </p>
      </div>
    </div>
  );
}
