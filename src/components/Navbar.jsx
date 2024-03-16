import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import { FaTwitter, FaTelegram } from "react-icons/fa";

function Navbar() {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  return (
    <nav className=" py-1 bg-[#000130]  ">
      <div className="container-wrapper flex items-center justify-between relative">
        <div className=" flex items-center gap-2">
          <img
            src="/images/logo.png"
            className="max-w-[4rem] w-full rounded-full"
            alt=""
          />

          <p className=" text-3xl font-medium font-groot-one text-[#fff]">
            Groot
          </p>
        </div>

        <div
          className={twMerge(
            "max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:w-[18rem] max-lg:h-screen max-lg:bg-[#EDAFAF] z-[1000] transition-all duration-300 max-lg:py-6 max-lg:px-10 max-lg:border-l-2 max-lg:border-white lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2",
            isSidebarVisible ? "translate-x-0" : "max-lg:translate-x-[18rem]"
          )}
        >
          <div className="flex items-center space-x-4 justify-between mb-6 lg:hidden">
            <img
              src="/images/logo.png"
              className="w-full max-w-[6rem]"
              alt=""
            />

            <button
              className="text-2xl"
              onClick={() => setSidebarVisibility(false)}
            >
              <IoClose />
            </button>
          </div>

          <ul className="flex max-lg:flex-col lg:items-center max-lg:space-y-2 lg:space-x-6">
            <li>
              <a href="/" className=" ">
                Home
              </a>
            </li>

            <li>
              <a href="/"> How to buy</a>
            </li>
            <li>
              <a href="/" className=" ">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4 text-xl [&_a:hover]:opacity-70">
            <a target="_blank" href="https://twitter.com/SushiiCatt5">
              <FaTwitter fill="#fff" />
            </a>
            <a target="_blank" href="https://t.me/sushicatso">
              <FaTelegram fill="#fff" />
            </a>
          </div>

          <button
            className="text-2xl lg:hidden"
            onClick={() => setSidebarVisibility(true)}
          >
            <IoMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
