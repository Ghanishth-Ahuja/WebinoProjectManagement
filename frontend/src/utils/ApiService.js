import { SCHEME_PLUS_PORT, API_BASE_ROUTE } from "../constants.jsx";

let ApiServices = {};
export default ApiServices = {
  async GetData(url) {
    try {
      const response = await fetch(
        `${SCHEME_PLUS_PORT}${API_BASE_ROUTE}${url}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Add this for cookies
        },
      );

      const jsonresponse = await response.json();

      if (!response.ok) {
        throw new Error(`${jsonresponse.message}`);
      }
      return jsonresponse;
    } catch (error) {
      console.error(`Error in GetData: ${error}`);
      throw error;
    }
  },

  async PostDataWithoutBody(url) {
    try {
      const response = await fetch(
        `${SCHEME_PLUS_PORT}${API_BASE_ROUTE}${url}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Add this for cookies
        },
      );

      const jsonresponse = await response.json();

      if (!response.ok) {
        throw new Error(`${jsonresponse.message}`);
      }
      return jsonresponse;
    } catch (error) {
      console.error(`Error in PostData: ${error}`);
      throw error;
    }
  },
  async PostData(url, body) {
    try {
      const response = await fetch(
        `${SCHEME_PLUS_PORT}${API_BASE_ROUTE}${url}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          credentials: "include", // Add this for cookies
        },
      );
      const jsonresponse = await response.json();
      console.log(jsonresponse);
      if (!response.ok) {
        
        throw {
          success:false,
          status: response.status,
          message: jsonresponse.message,
        };
      }
      return jsonresponse;
    } catch (error) {
      console.error(`Error in PostData: ${error}`);
      throw error;
    }
  },

  async PutData(url, body) {
    try {
      const response = await fetch(
        `${SCHEME_PLUS_PORT}${API_BASE_ROUTE}${url}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          credentials: "include", // Add this for cookies
        },
      );
      const jsonresponse = await response.json();

      if (!response.ok) {
        throw new Error(`${jsonresponse.message}`);
      }
      return jsonresponse;
    } catch (error) {
      console.error(`Error in PutData: ${error}`);
      throw error;
    }
  },

  async DeleteData(url, body) {
    try {
      const response = await fetch(
        `${SCHEME_PLUS_PORT}${API_BASE_ROUTE}${url}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          credentials: "include", // Add this for cookies
        },
      );
      const jsonresponse = await response.json();

      if (!response.ok) {
        throw new Error(`${jsonresponse.message}`);
      }
      return jsonresponse;
    } catch (error) {
      console.error(`Error in DeleteData: ${error}`);
      throw error;
    }
  },

  async PostWithFormData(url, formData) {
    try {
      const response = await fetch(
        `${SCHEME_PLUS_PORT}${API_BASE_ROUTE}${url}`,
        {
          method: "POST",
          body: formData,
          credentials: "include", // Add this for cookies
        },
      );
      const jsonresponse = await response.json();

      if (!response.ok) {
        throw new Error(`${jsonresponse.message}`);
      }
      return jsonresponse;
    } catch (error) {
      console.error(`Error in PostWithFormData: ${error}`);
      throw error;
    }
  },
  async PutWithFormData(url, formData) {
    try {
      const response = await fetch(
        `${SCHEME_PLUS_PORT}${API_BASE_ROUTE}${url}`,
        {
          method: "PUT",
          credentials: "include",
          body: formData,
          // Don't set Content-Type header - browser will set it automatically with boundary
        },
      );
      const jsonresponse = await response.json();

      if (!response.ok) {
        throw new Error(`${jsonresponse.message}`);
      }
      return jsonresponse;
    } catch (error) {
      console.error("Error in PutWithFormData:", error);
      throw error;
    }
  },
};
