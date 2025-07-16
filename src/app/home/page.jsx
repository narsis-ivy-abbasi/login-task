"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { getToken, removeToken } from "../lib/auth";
import { logoutUser } from "../lib/api";

const Page = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const token = getToken();
      await logoutUser(token);
      removeToken();
      router.push("/login");
    } catch (err) {
      alert("Logout not successful");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <button
        onClick={handleLogout}
        className="bg-[#a79bf2] text-white px-6 py-3 rounded-2xl w-full max-w-xs"
      >
        Logout
      </button>
    </div>
  );
};

export default Page;
