import axios from "axios";

const API_URL = "http://localhost:8000";

const headers = {
  "Content-Type": "multipart/form-data",
};

export const getSignedUrl = async () => {
  try {
    // get -> backend ke server ka URL chahiye
    const response = await axios.get(`${API_URL}/videos-url`);
    return response.data;
  } catch (error) {
    console.log("Error occured : ", error.message);
    return error.response.data;
  }
};

export const uploadFile = async (url, file) => {
  try {
    // get -> backend ke server ka URL chahiye
    const response = await axios.put(url, file, { headers: headers });
    return response.data;
  } catch (error) {
    console.log("Error occured : ", error.message);
    return error.response.data;
  }
};
