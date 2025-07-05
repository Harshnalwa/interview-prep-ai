// Debug test for the authentication issue
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

export const debugAuth = async () => {
  console.log("Testing authentication endpoints...");
  console.log("Base URL:", axiosInstance.defaults.baseURL);
  
  try {
    // Test registration
    const testUser = {
      name: "Debug User",
      email: "debug@test.com",
      password: "password123",
      profileImageUrl: ""
    };
    
    console.log("Attempting registration with:", testUser);
    const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, testUser);
    console.log("Registration successful:", response.data);
    
    return response.data;
  } catch (error) {
    console.error("Registration failed:");
    console.error("Error object:", error);
    console.error("Error response:", error.response);
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", error.response.data);
      console.error("Response headers:", error.response.headers);
    }
    
    throw error;
  }
};
