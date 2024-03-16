import React from "react";
// import { FaTelegram } from "react-icons/fa";

function AboutUs() {
  return (
    <div className=" container-wrapper  px-4 ">
      <h1 className="max-w-xl text-4xl font-sushi-one mb-5 mt-5">
        Join Our Community
      </h1>

      <div className="flex flex-col justify-center items-center big-info__inner items-center px-4 border-[#a1ff3c] border ">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className=" max-w-xl text-4xl font-medium text-center font-sushi-one text-[#d95a83] p-4">
            Join our community
          </h1>
          <p className="text-lg font-medium text-[white] text-center p-2">
              By Buying FrogNinja, you become a part of the community. You're not just a fan, <br />you're a support
              , a patron, apart of the creator's journey.
            </p>
        </div>
            {/* <a target="_blank" href="https://t.me/kingpepeso mb-5">
                        <FaTelegram fontSize="34px" fill="#a1ff3c" />
                      </a> */}
        <div className="mt-5 mb-10">
          <a
            href="#"
            className="text-base py-2 uppercase font-sushi-one px-10 rounded-full bg-gradient-to-b from-[#e47369] to-[#f1a3ff] shadow-lg shadow-black/40 text-black  font-bold border border-yellow"

          >
            join telegram
          </a>
        </div>

        {/* <div>
          <img src="images/about.png" alt="" className=" h-[350px]" />
        </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
