function Hero() {
  return (
    <section className=" py-6">
      <div className="container-wrapper">
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full  bg-[#851B2C] bg-opacity-50 border rounded-lg p-5 shadow-lg">
              <h1 className=" font-groot-one text-4xl my-4 text-[#fff]">
              Welcome to the Groot NFT Universe! :
              </h1>

              <p className="font-groot-one  text-xl text-white">
               The purrfect blend
                of Japanese charm, meme magic, and delicious crypto goodness!  Sushi Cat isn't just your ordinary feline;
              </p>

              <p className=" font-groot-one text-xl text-white py-1">
               This adorable kitty
                is on a mission to satisfy appetites and make holders grow
                bigger than a sumo wrestler on a sushi binge! With each tasty
                morsel devoured, Sushi Cat's hunger grows, and so does the
                community's excitement! Join our vibrant community of food
                lovers, crypto enthusiasts, and sushi cat meme fans for a
                purrfectly fun ride!
              </p>

              <div className=" py-2">
                <a
                  href="https://solscan.io/token/Ft5kV9VpmNuFawoGLhbHKTsWDUKUraa43GKdQBf8zdV3"
                  target="_blank"
                  className="my-2 font-groot-one flex justify-start text-base  text-white  sm:text-xl"
                >
                  {" "}
                  Contract : Ft5kV9VpmNuFawoGLhbHKTsWDUKUraa43GKdQBf8zdV3
                </a>
              </div>
              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
                <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/FJky1Wejuou2Gr9bB16tiNiWjNCBLg7crZ9s9mttE58w?t=1710608652588"
                  target="_blank"
                  className="py-2 text-base uppercase font-sushi-one px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
                >
                  buy now
                </a>
                <a
                  href="https://t.me/sushicatso" target="_blank"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-full bg-gradient-to-b from-[#e47369] to-[#f1a3ff] shadow-lg shadow-black/40 text-black  font-bold border border-yellow"
                >
                  join telegram
                </a>

                <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/FJky1Wejuou2Gr9bB16tiNiWjNCBLg7crZ9s9mttE58w?t=1710608652588"
                  target="_blank"
                  className="py-2 text-base uppercase font-sushi-one px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
                >
                  Dex Tool
                </a>
              </div>
            </div>

            <div className=" w-full">
              <div>
                {/* <img src="images/hero.png" alt="" className=" mx-auto" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
