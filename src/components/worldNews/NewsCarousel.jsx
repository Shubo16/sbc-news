import React, { useEffect, useState } from "react";
import { latestNews } from "../../services/worldsNewsApi";
import { motion } from "framer-motion";
import AnimatedNoImgText from "../extras/AnimatedNoImgText";

const NewsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [articles, setArticles] = useState([]);
  const [imgError, setImgError] = useState(false);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsData = await latestNews({
          page: 1,
          sortBy: "trending",
          q: "palestine",
        });
        setArticles(newsData);
      } catch (error) {
        console.log("Error loading news", error);
      }
    };
    loadNews();
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
    setImgError(false);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
    setImgError(false);
  };

  return (
    <div>
      <motion.div
        variants={listVariants}
        className="mx-10 p-4 h-auto rounded-xl bg-white shadow-lg ring-8 ring-black/5 w-auto"
      >
        {articles.length > 0 && (
          <div>
            {imgError || !articles[activeIndex].urlToImage ? (
              <AnimatedNoImgText />
            ) : (
              <img
                src={articles[activeIndex].urlToImage}
                alt={`Slide ${activeIndex}`}
                className="max-h-80 lg:h-84 w-full object-cover object-center"
                onError={() => setImgError(true)}
              />
            )}
            <div
              key={articles.key}
              className="static bottom-44 p-5 text-wrap text-white bg-black bg-opacity-50 rounded-b-lg"
            >
              <h1 className="text-2xl font-bold">
                {articles[activeIndex].title}
              </h1>{" "}
              {/*IS NOW AN ARRAY USE A.INDEX */}
              <p className="text-pretty">{articles[activeIndex].description}</p>
            </div>
          </div>
        )}
      </motion.div>
      <div className="flex justify-center mt-4 gap-12">
        <button
          onClick={prevSlide}
          className="bg-transparent text-cherry h-10 w-10 p-1 z-10 transition-colors border-2 border-black rounded-md hover:bg-cherry hover:text-black"
        >
          {"<"}
        </button>

        <button
          onClick={nextSlide}
          className=" bg-transparent text-cherry h-10 w-10 p-1 z-10 transition-colors border-2 border-black rounded-md  hover:bg-cherry hover:text-black"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default NewsCarousel;
