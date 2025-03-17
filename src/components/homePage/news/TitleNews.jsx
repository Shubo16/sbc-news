import React from "react";

export default function Title() {
  const title = "Keep up with the latest news";

  return (
    <div className="h-[10svh] w-full font-poppins my-10">
      <div className="text-center px-10">
        <h1 className="capitalize border-b-4 border-cherry text-3xl py-5 font-bold ">{title}</h1>
      </div>
    </div>
  );
}
