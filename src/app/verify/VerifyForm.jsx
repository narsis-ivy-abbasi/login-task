"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { verifyOTP } from "../lib/api";
import { saveToken } from "../lib/auth";

const VerifyForm = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const phone = searchParams.get("phone");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await verifyOTP(phone, code);
      saveToken(res.data.token);
      router.push("/home");
    } catch (err) {
      setError("Code Expired");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-bold text-left mb-1">Connect with Moms</h1>
        <p className="text-left text-gray-500 mb-12">
          Share and learn with others
        </p>

        <form onSubmit={handleSubmit}>
          <h2 className="text-black text-lg font-bold mb-1">Sign up</h2>
          <p className="text-sm font-semibold text-gray-500 mb-4">Enter code</p>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="SMS Code"
            className="w-full mb-4 p-3 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button
            type="submit"
            className="w-full bg-[#a79bf2] text-white py-2 rounded-2xl"
          >
            Submit
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default VerifyForm;
