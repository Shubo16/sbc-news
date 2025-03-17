import React from "react";

function Footer() {
  const date = new Date();
  const getCurrentYear = date.getFullYear();

  return (
    <div className="border-t-4 border-black h-[10svh] w-full flex justify-between lg:gap-10 items-center font-poppins bottom-2">
      <div className="flex ml-10 justify-evenly w-auto gap-10">
        <a href="">
          <h4 className="font-light text-lg hover:text-cherry">
            LinkedIn
          </h4>
        </a>
        <a href="https://github.com/Shubo16">
          <h4 className="font-light text-lg hover:text-cherry">
            Github
          </h4>
        </a>
        <a
          href="mailto:shubo2002@sgmail.com"
          className="font-light text-lg hover:text-cherry"
        >
          Contact Me
        </a>
      </div>
      <div className="mr-10 text-center capitalise">
        <h4>SBC Worlwide &copy;</h4>
        <p>{getCurrentYear}</p>

        <p className="text-cherry ">Designed by Shubo</p>
      </div>
    </div>
  );
}

export default Footer;
