import { get, post, patch, del } from "@/helpers/apiWrapper";

// Function to create a new network location
export const createSignIn = async (userData) => {
  const config = {
    data: {
      username: userData?.username,
      password: userData?.password,
    },
  };
  return await post("/api/login", config);
};
