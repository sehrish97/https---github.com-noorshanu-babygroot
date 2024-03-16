import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 ">
        <h2 className="font-groot-one text-5xl my-2 text-[#ffffff] text-center">
          Our Products
        </h2>

        <div className=" big-info__inner px-4 border-[#fff] border py-2 ">
          <div className=" max-w-xl">
            <p className="font-medium font-groot-one text-3xl text-white  py-2">
              Sushi Cat: The cutest meme coin on Solana, serving up
              sushi-inspired crypto fun!
            </p>
            <h1 className=" text-2xl py-3  font-groot-one text-white  font-medium">
              1. Sushi NFTs: Dive into a world of digital sushi art with our
              exclusive collection of Sushi NFTs. Rare and delicious – just like
              the real thing!
            </h1>

            <h1 className=" text-2xl py-3 font-groot-one  text-white font-medium">
              2. Trading Bot: Our trading bot helps you navigate the crypto
              market while you enjoy your sushi. Never miss out on the hottest
              trends again!
            </h1>

            <h1 className=" text-2xl py-3 font-groot-one text-white font-medium">
              3. 24/7 Growing Community: Join our expanding community and let's
              grow together while munching on sushi!
            </h1>
          </div>

          <div className=" w-full sm:w-[500px]">
            <RoadmapCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
