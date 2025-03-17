import axios from "axios";

const apiKey = "cca6f33c8491476ba68458b9d28f57b2";
const baseUrl = `https://newsapi.org/v2/everything?q="Palestine"&language=en&sortBy=popularity&apiKey=${apiKey}`;

export const HomeNews = async () => {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        "X-Api-Key": apiKey, // Add the API key here
      },
    });
    // console.log(response.data);
    const articles = response.data.articles; // Ensure you're accessing 'articles' from response
    return articles.sort(() => 0.4 - Math.random()).slice(0, 1);
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const randomNews = async () => {
  try {
    const response = await axios.get(baseUrl, {
      headers: {
        "X-Api-Key": apiKey, // Add the API key here
      },
    });
    // console.log(response.data);
    const articles = response.data.articles; // Ensure you're accessing 'articles' from response
    return articles.sort(() => 0.4 - Math.random()).slice(0, 3);
  } catch (error) {
    // console.error("Error fetching news:", error);
    return [];
  }
};
