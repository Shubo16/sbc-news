import PaginationComponent from "../extras/pagination";
import React, { useEffect, useState } from "react";
import { trendingNews } from "../../services/worldsNewsApi"; // Assuming you have this function in your service
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function TrendingNewsSection() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Animation Variants
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const publishedDate = (publishedAt) => {
    return publishedAt ? publishedAt.split("T")[0] : "Unknown date";
  };

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsData = await trendingNews({
          language: "en",
          q: "palestine",
        });
        console.log("Fetched news:", newsData);

        if (Array.isArray(newsData)) {
          setArticles(newsData);
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

  const totalItems = articles.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("Fetching page:", currentPage);
  };
  const formatTitle = (title) =>
    title.trim().toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="p-10">
      <h2 className="border-b-4 border-black mx-20 text-3xl font-bold text-center">
        Trending News
      </h2>
      <AnimatePresence>
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          key={currentPage}
        >
          {currentItems.map((article, index) => (
            <motion.li
              className="my-5 p-4 border-2 list-none flex rounded-md drop-shadow-lg shadow-lg hover:border-black w-[100%] overflow-hidden"
              variants={itemVariants}
              exit={{ opacity: 0, y: 20 }}
              key={article.url || index}
              whileHover={{ scale: 1.04, transitionDelay: 0.1 }}
            >
              <Link
                to={`/news/${formatTitle(article.title || "news")}`}
                state={{ article }}
              >
                <img
                  src={article.urlToImage || "default-image.jpg"}
                  className="w-32 h-32 md:lg-44 lg:w-52 object-cover rounded-md"
                  alt={article.title || "News Image"}
                />
                <div className="flex flex-col w-full gap-5 lg:w-full">
                  <h1 className="font-bold text-lg md:text-2xl lg:text-3xl">
                    {article.title || "No title available"}
                  </h1>
                  <p className="text-sm md:text-base lg:text-xl">
                    {article.description || "No description available."}
                  </p>
                </div>
                <div className="flex font-bold font-poppins lg:text-lg justify-between">
                  <p className="">{article.author || "Unknown author"}</p>
                  <p className="">{publishedDate(article.publishedAt)}</p>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.div>
      </AnimatePresence>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
