import axios from "axios";

const apiKey = "cca6f33c8491476ba68458b9d28f57b2";
const baseUrl = "https://newsapi.org/v2/everything";

export const trendingNews = async (additionalParams = {}) => {
  const params = {
    language: "en",
    ...additionalParams,
    apiKey: apiKey, // Add API key
  };

  const queryParams = new URLSearchParams(params).toString();
  const updatedNewsUrl = `${baseUrl}?${queryParams}`;

  console.log("URL with query parameters:", updatedNewsUrl); // For debugging

  try {
    const response = await axios.get(updatedNewsUrl);
    if (response && response.data && response.data.articles) {
      return response.data.articles;
    } else {
      console.error("No articles returned in response.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching trending news:", error);
    return [];
  }
};


export const latestNews = async (additionalParams = {}) => {
    const params = {
      language: "en",
      ...additionalParams,
      apiKey: apiKey, // Add API key
    };
  
    const queryParams = new URLSearchParams(params).toString();
    const updatedNewsUrl = `${baseUrl}?${queryParams}`;
  
    console.log("URL with query parameters:", updatedNewsUrl); // For debugging
  
    try {
      const response = await axios.get(updatedNewsUrl);
      if (response && response.data && response.data.articles) {
        return response.data.articles;
      } else {
        console.error("No articles returned in response.");
        return [];
      }
    } catch (error) {
      console.error("Error fetching trending news:", error);
      return [];
    }
  };