
export default function SmallNewsCard({
  creator,
  pubDate,
  imageUrl,
  description,
}) {
  const shortenedDesc = (description) =>
    description ? description.slice(0, 200) + "..." : "";
    
  const formatDate = (pubDate) =>
    pubDate ? pubDate.split("T")[0] : ""; // Corrected to use pubDate

  const presentAuthor = (creator) => creator || "No Author";

  return (
    <div className="flex flex-row gap-4 w-full border-cherry border-b-2 pb-5 lg:mx-20">
      <img
        src={imageUrl}
        alt="News"
        className=" lg:w-1/3 object-cover rounded-md h-full w-1/6"
      />
      <div className="w-full flex flex-col justify-between gap-4">
        <h3 className="text-pretty text-lg lg:text-xl sm:text-2xl">
          {shortenedDesc(description)}
        </h3>
        <div className="flex justify-between text-md lg:text-lg font-semibold ">
          <p
            style={{
              fontStyle: !creator ? "italic" : "normal", // Fixed to use creator
            }}
          >
            {presentAuthor(creator)}
          </p>
          <p>{formatDate(pubDate)}</p>
        </div>
      </div>
    </div>
  );
}
