"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { sendOTP } from "../lib/api";

const Page = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendOTP(phone);
      router.push(`/verify?phone=${phone}`);
    } catch (error) {
      setError("Error on Sending Code");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-10 bg-white">
      {/* Header Text */}
      <div className="text-left mb-16 w-full mx-auto max-w-md">
        <h1 className="text-2xl font-bold text-black">AI Support, Anytime</h1>
        <p className="text-gray-500 text-sm mt-2">
          Quick answers to your questions
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto mt-7">
        <h2 className="text-lg font-semibold text-black mb-3">Sign up</h2>
        <p className="text-sm font-semibold text-gray-400 mb-4">
          Enter phone number
        </p>

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+989167652024"
          className="w-full px-4 py-3 rounded-lg bg-gray-100  text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          className="mt-6 w-full bg-[#a79bf2]  hover:bg-[#9884f0] text-white py-3 rounded-2xl text-sm font-semibold"
        >
          Get Code
        </button>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
      </form>
    </div>
  );
};

export default Page;
