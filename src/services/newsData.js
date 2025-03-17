import axios from "axios";

const apiKey = "pub_73660f16cbc1ce11a3ce4139c79cd2f761f96";
const baseUrl = "https://newsdata.io/api/1/news";  // Corrected endpoint

export const trendingNewsD = async (additionalParams = {}) => {
    const params = {
        language: "en",
        apikey: apiKey,
        image:1,
          // Fixed parameter name
        ...additionalParams,
    };

    const queryParams = new URLSearchParams(params).toString(); // Fixed `.toString()`
    const updatedNewsUrl = `${baseUrl}?${queryParams}`;  // Removed incorrect `@`

    console.log("URL with parameters:", updatedNewsUrl);

    try {
        const response = await axios.get(updatedNewsUrl);
        console.log("API Response:", response);
        if (response?.data?.results) {
          return response.data.results;
        } else {
          console.error("No articles returned in response.");
          return [];
        }
      } catch (error) {
        console.error("Error fetching trending news:", error);
        return [];
      
      }
};
