import { get, post, patch, del } from "@/helpers/apiWrapper";

const API_BASE_URL = "/networkLocation";

// Function to get a list of network locations
export const getNetworkLocations = async (skip, count) => {
  const config = {
    params: {
      _skip:skip,
      _count:count,
    },
  };
  return await get(`${API_BASE_URL}/list`, config);
};

// Function to get a network location by ID
export const getNetworkLocationById = async (id) => {
    return await get(`${API_BASE_URL}/${id}`);
  };
  
  // Function to create a new network location
  export const createNetworkLocation = async (networkLocationData) => {
    return await post(API_BASE_URL, networkLocationData);
  };
  
  // Function to update a network location by IDhttps://www.example.com
  export const updateNetworkLocation = async (id, updatedNetworkLocationData) => {
    return await patch(`${API_BASE_URL}/${id}`, updatedNetworkLocationData);
  };
  
  // Function to delete a network location by ID
  export const deleteNetworkLocation = async (id) => {
    return await del(`${API_BASE_URL}/${id}`);
  };