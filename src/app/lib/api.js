// src/lib/api.js
export const sendOTP = async (phone) => {
  console.log("📩 Sending OTP to:", phone);
  return Promise.resolve({ data: { success: true } });
};

export const verifyOTP = async (phone, code) => {
  console.log("✅ Verifying code:", code, "for phone:", phone);
  return Promise.resolve({ data: { token: "mock-token-123" } });
};

export const logoutUser = async (token) => {
  console.log("🚪 Logging out token:", token);
  return Promise.resolve({ data: { success: true } });
};
