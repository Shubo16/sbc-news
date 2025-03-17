import React, { useEffect, useState } from "react";
import SmallNewsCard from "./smallNewsCards";
import NewsCard from "./headerNewsCard";
import Title from "./TitleNews";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { trendingNews } from "../../../services/worldsNewsApi";

function HomeNewsSection() {
  const [articles, setArticles] = useState([]);
  const [randomArticles, setRandomArticles] = useState([]);

  const publishedDate = (publishedAt) => {
    return publishedAt ? publishedAt.split("T")[0] : "";
  };

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsData = await trendingNews({
          // any specific parameters for your news API
        });
        console.log("Fetched news:", newsData);

        if (Array.isArray(newsData)) {
          setArticles(newsData);

          // Randomly select articles for the right-side cards
          const randomIndexes = [];
          while (randomIndexes.length < 3) {
            const randomIndex = Math.floor(Math.random() * newsData.length);
            if (!randomIndexes.includes(randomIndex)) {
              randomIndexes.push(randomIndex);
            }
          }
          setRandomArticles(randomIndexes.map(index => newsData[index]));
        } else {
          console.error("Unexpected response format:", newsData);
          setArticles([]);
        }
      } catch (error) {
        console.error("Error loading news:", error.response || error.message);
        setArticles([]);
      }
    };

    loadNews();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center">
      <Title />
      <motion.div className="flex lg:h-1/2 flex-col lg:grid lg:grid-cols-2 lg:gap-10 w-full bg-slate-50 py-4">
        {/* Left Side (Large News Card) */}
        <div className="">
          {articles.slice(0, 1).map((article) => (
            <NewsCard
              key={article.link}
              imageUrl={article.imageToUrl}
              title={article.title}
              author={article.author}
            />
          ))}
        </div>
        <div>
          <div className="flex lg:h-10 justify-between text-2xl sm:text-3xl capitalize border-b-2 border-black px-5 font-bold mx-10 my-10 lg:mt-0 lg:mb-10 font-poppins">
            <h3>For You</h3>
            <Link to="/news">
              <p className="text-zinc-700 hover:text-cherry">See All</p>
            </Link>
          </div>
          {/* Right Side (Small News Cards) */}
          <div className="w-full h-auto lg:h-auto lg:w- flex flex-col gap-4 items-center px-5 lg:row-span-2 lg:col-start-2">
            {randomArticles.map((randomArticle) => (
              <SmallNewsCard
                key={randomArticle.link}
                imageUrl={randomArticle.image_url}
                creator={randomArticle.creator}
                description={randomArticle.description}
                publishedAt={publishedDate(randomArticle.pubDate)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default HomeNewsSection;
