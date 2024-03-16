import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";
import Partner from "./sections/Partner";

function AppLayout() {
  return (
    <>
      <main className="  bg-main">
        <Navbar />

        <Hero />
      </main>
      <div className=" h-[70px] border-t-2 border-b-2 py-4 border-[#220123] mb-2 bg-[#000130] ">
        <MemeMark />
      </div>

      <div>
        <dl className="h-[50px]" />
        <Intro />

        <div>
          <Partner />
        </div>
      </div>
      <footer className=" w-full pb-8 ">
        <div className="container-wrapper mt-8 ">
          <div className="flex justify-between flex-col sm:flex-row">
            <div className="mt-8 flex items-center justify-center gap-2">
              <img
                src="/images/logo (2).png"
                className="max-w-[8rem] w-full rounded-full"
                alt=""
              />

              <p className=" text-2xl font-groot-one">Sushi Cat</p>
            </div>

            <div className="mt-8  flex justify-center flex-col sm:flex-row items-center space-x-6">
              <div>
                <p className="font-groot-one">
                  Copyright 2024 SUSHICAT. All Rights Reserved.
                </p>
              </div>
              <div className="flex items-center space-x-4 text-xl [&_a:hover]:opacity-70">
                <a target="_blank" href="https://twitter.com/SushiiCatt5">
                  <FaTwitter fill="#4D2E7B" />
                </a>
                <a target="_blank" href="https://t.me/sushicatso">
                  <FaTelegram fill="#4D2E7B" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AppLayout;
