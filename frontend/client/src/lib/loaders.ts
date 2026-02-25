import { apiRequest } from "./apiRequest";

export const listPageLoader = async () => {
  try {
    // Making a real GET request to your backend API!
    const response = await apiRequest.get("/posts");
    console.log("SUCCESS! Data from backend:", response.data);
    return response.data;
  } catch (err) {
    console.error("LOADER CRASHED! Reason:", err); // 👈 Add this
    console.error("Failed to fetch posts from API", err);
    return []; // Return empty array if backend is down
  }
};