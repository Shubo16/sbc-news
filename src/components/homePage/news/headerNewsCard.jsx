import { motion } from "framer-motion";

export default function NewsCard({ title, author, imageUrl }) {
  return (
    <div className="flex w-full h-full px-10 lg:ml-10 lg:p-0 lg:h-full">
      <motion.div
        initial={{}}
        className="h-96 w-full bg-cover bg-no-repeat bg-center flex flex-col justify-end
                  lg:h-full lg:px-10"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="relative p-4 text-wrap bg-black bg-opacity-50 w-full">
          <h1 className="text-2xl font-extralight text-white capitalize lg:text-4xl lg:my-4 ">
            {title}
          </h1>
          <p className="text-lg font-extralight text-zinc-300 capitalize lg:text-3xl ">
            {author}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
