import { useLocation, useParams } from "react-router-dom";
import Footer from "../extras/Footer";

const NewsContentPage = () => {
  const { state } = useLocation();
  const { slug } = useParams();

  if (!state?.article) {
    return <p className="text-center text-lg p-4">Article not found.</p>;
  }

  const { title, urlToImage, content } = state.article;

  return (
    <div className="min-h-[90svh] flex flex-col px-4 md:px-8">
      {/* Main content section */}
      <div className="flex-grow flex flex-col items-center w-full text-center">
        <h1 className="text-xl md:text-2xl font-bold capitalize my-2 border-b-4 pb-4 border-black">{title}</h1>
        <img
          src={urlToImage}
          alt={title}
          className="mt-4 w-full max-w-[600px] h-48 md:h-72 object-cover rounded-lg"
        />
        <p className="mt-4 text-sm md:text-base leading-relaxed max-w-[800px]">
          {content}
        </p>
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default NewsContentPage;
