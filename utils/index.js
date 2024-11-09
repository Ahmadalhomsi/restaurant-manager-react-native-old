import api from "./api";

export const getHelloWorld = async () => {
  try {
    const response = await api.get(`/testhello`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from the server: ", error);
    return null;
  }
};
