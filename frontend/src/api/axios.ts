import axios from "axios";
const API_BASE_URL = "http://localhost:5050";

export const client = async (method: string, url: string, body: any = null) => {
  try {
    const request: any = {
      method,
      url: `${API_BASE_URL}${url}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      request.data = body;
    }

    const { status, data } = await axios(request);
    return { status, data };
  } catch (error) {
    console.error(`Error with ${method} request to ${url}:`, error);
    throw error; // Rethrow error for handling in UI
  }
};
