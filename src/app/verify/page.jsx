"use client";

import React, { Suspense } from "react";
import VerifyForm from "./VerifyForm";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyForm />
    </Suspense>
  );
};

export default Page;
