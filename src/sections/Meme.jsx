import React from "react";

function Meme() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">
     

      <h2 className=" text-2xl py-2">A Meme Saga begins...</h2>

      <div className=" flex items-center gap-4 justify-between flex-col sm:flex-row">
        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[270px] h-[500px]">
          <div>
            <p className="font-ninja">Explore the Culinary Cosmos</p>
          </div>

          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/suchicat2.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">
              {" "}
              Indulge in a universe where sushi meets feline charm. Discover
              diverse virtual sushi restaurants offering traditional nigiri to
              exotic rolls.
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap  justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[270px] h-[500px]">
          <div>
            <p className="font-ninja">Join the Whiskered Revolution</p>
          </div>

          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/suchicat1.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">
              Become a visionary chef in the SushiCat community. Open your own
              sushi restaurant, compete, trade rare ingredients, and connect
              with fellow sushi enthusiasts.
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[270px] h-[500px]">
          <div>
            <p className=" font-ninja">Embrace the Cat Craze</p>
          </div>

          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/suchicat6.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">
              Immerse yourself in a world where cats rule. Experience the charm
              of feline-inspired sushi-making in our vibrant virtual realm.
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[270px] h-[500px]">
          <div>
            <p className=" font-ninja">Tailored Experiences</p>
          </div>

          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/suchicat4.jpeg" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize">
              Customize your journey in SushiCat World. From restaurant themes
              to menu creations, make every moment uniquely yours.With endless
              possibilities, your culinary adventure awaits.
            </p>
          </div>
        </div>
        {/*         
        <img
          src="images/meme2.jpeg"
          alt=""
          className=" rounded-xl border border-[#fed403] h-[350px]"
        />
        <img
          src="images/meme3.jpeg"
          alt=""
          className=" rounded-xl border border-[#fed403] h-[350px]"
        /> */}
      </div>
    </div>
  );
}

export default Meme;
