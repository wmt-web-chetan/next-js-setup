import { get, post, patch, del } from "@/helpers/apiWrapper";

export const getReadMeUser = async () => {
  return await get("/api/userDetails");
};
