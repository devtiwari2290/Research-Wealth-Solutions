import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  const data = [
    {
      detail:
        "Goodluck Capital would be the first investment solution that encourages its students / clients to do their own research as well. Thanks for your continuous support!",
      name: "Siddharth",
      profession: "It Professional",
      image: "",
    },

    {
      detail:
        "This firm is managed by Arjit. An exceptionally high qualified person I had came across so far. The stuffs I learned from him was way beyond my expectations!",
      name: "Bikram",
      profession: "Grment Merchandiser",
      image: "",
    },

    {
      detail:
        "Intially, I was trading by making guesses and on the advice of my friends and faced heavy loss. Then I started taking  the short term trading advices of Research wealth Solutions. Now I am gradually recovering all my losses.",
      name: "Sandhya",
      profession: "Tourism",
      image: "",
    },

    {
      detail:
        "I am taking positional trading services from research wealth Solutions since last year and they are providing me very balance and consistent profit. Thanks for your contniuous support.",
      name: "Arpita",
      profession: "Architect",
      image: "",
    },
  ];

  return (
    <>
      <div id="banner">
        <div className="relative">
          <img
            src={`${origin}/images/banner.jpg`}
            alt="..."
            className="w-full object-cover min-h-80 max-h-[32rem] "
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center">
            <div className="w-full px-2 py-3">
              <div className="max-w-7xl mx-auto">
                <div className="mb-5 pl-2">
                  <div className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl ">
                    Empowering Traders to Seize Every Opportunity!
                  </div>
                </div>
                <Link
                  to="/"
                  className="uppercase ml-2 font-medium text-sm cursor-pointer px-5 py-3 rounded bg-white"
                >
                  Explore More
                </Link>

                <div className="mt-8 px-4">
                  <h1 className="text-white text-base sm:text-4xl md:text-3xl lg:text-3xl font-bold pb-3">
                    <span className="text-yellow-400">Be Smart</span> with your
                    money. We tell you three keys to unlock the{" "}
                    <span className="text-teal-400">profit</span> potential .
                  </h1>
                  <h2 className="text-white text-base sm:text-4xl md:text-3xl lg:text-3xl font-bold">
                    <span className="text-yellow-400">WHERE</span> to invest?
                    When to invest and{" "}
                    <span className="text-yellow-400">HOW LONG</span> to invest?
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About us */}
        <div className="w-full h-[58rem] lg:h-[40rem] bg-[#F4F4F4]">
          <div className="flex flex-col lg:flex-row lg:justify-center  items-center pt-10 lg:p-20">
            {/* About company  */}
            <div className="w-[20rem] lg:w-[30rem]  mx-auto  lg:p-6 rounded-lg ">
              <h1 className="text-4xl font-bold text-left text-gray-700 mb-4 ">
                About Us
              </h1>
              <p className="mb-3 text-sm">
                Research Wealth Solutions, led by our founder and Chief Analyst
                Miss Shruti Mishra, Research Analyst service. With her
                impressive academic background of B.Com and M.Com and her
                exceptional expertise in the Indian Financial Market, Sanchi has
                been passionately studying and analyzing the market for over a
                decade.x
              </p>

              <p>
                Miss Shruti Mishra believes in identifying and recommending only
                futuristic stocks with the potential to become super
                multi-baggers. This vision and dedication led her to clear all
                three SEBI (Research Analyst) exams, equipping her to guide
                investors toward financial success in the stock market
              </p>
            </div>

            {/* Founder Details */}
            <div className="w-[20rem] lg:w-[30rem] mb-10 h-[26rem] mt-10  mx-auto bg-white pt-8  lg:p-6 rounded-lg shadow-lg ">
              <img
                src="No Image Available"
                className="h-32 w-32 object-cover mx-auto border rounded-full text-center pt-10"
                alt="No Image Available"
              />
              <h3 className="text-3xl font-medium text-center text-blue-700 mb-2 pt-5">
                Shruti Mishra
              </h3>
              <p className="text-lg font-medium text-center text-gray-700">
                FOUNDER
              </p>
              <p className="text-3xl font-bold px-36 md:px-52 lg:px-52 text-center text-blue-500 pt-2">
                <FaLinkedin />
              </p>

              <h2 className="text-center pt-5">
                <span className="font-semibold">B.Com</span> &{" "}
                <span className="font-semibold">M.Com </span> and her
                exceptional expertise in the{" "}
                <span className="font-semibold">Indian Financial Market</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Certified Market Expert By */}
        <div className="w-full h-[32rem] lg:h-[18rem] bg-white">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-bold text-center text-gray-700 pt-10 uppercase">
            Certified Market Expert By
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-28 px-40 lg:mx-28 pt-10 lg:pt-20">
            <img
              src="public\images\IFTA-logo-1-600x155.webp"
              className="h-14"
              alt=""
            />

            <img src="public\images\header-logo.webp" className="h-14" alt="" />

            <img src="public\images\z3-1.webp" className="h-14" alt="" />

            <img src="public\images\nism-logo.webp" className="h-14" alt="" />
          </div>
        </div>

        {/* What we Do */}
        <div className="w-full min-h-screen bg-[#F4F4F4]">
          <h2 className="text-center text-2xl md:text-3xl lg:text-3xl font-bold text-gray-700 pt-10 uppercase ">
            <u>What We Do</u>
          </h2>
          <div className="flex flex-col lg:flex-row justify-center">
            {/* Short Term Traning Advice */}
            <div
              className="w-[23rem] lg:w-[30rem] mb-10 h-[48rem] lg:h-[45rem] mt-10  mx-auto  pt-8  lg:p-6 rounded-lg shadow-lg "
              style={{
                background: "#8e2de2",
                backgroundImage:
                  "-webkit-linear-gradient(to right, #8e2de2, #4a00e0)",
                backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)",
              }}
            >
              <h2 className="text-white text-2xl text-center mb-2">
                Short Term Traning Advice
              </h2>
              <p className="text-gray-400 text-center mb-5">
                Holding Period: 1-3 weeks
              </p>

              <p className="text-white text-left px-5">
                Leverage our knowledge to trade with confidence. Expert Advice
                to make money having specific target and a strict stoploss
              </p>

              <div className="text-white text-left text-lg px-5 pt-8">
                <p className="mb-2">✅ top 9-10 trading advice/month</p>
                <p className="mb-2">✅ profit proability 9-10% per trade</p>
                <p className="mb-2">✅ short term swing trade (1-2 weeks)</p>
                <p>✅ risk reward ratio from 1:2 to 1:4</p>
              </div>

              {/* Pricing Section */}
              <div className="px-5">
                <h2 className="text-green-500 text-2xl text-left mt-10 ">
                  Pricing
                </h2>
                <div className="grid grid-cols-4 text-center text-white gap-10 pt-5 text-sm">
                  <p>1 month</p>
                  <span>Rs 5000</span>
                  <span className="text-red-500 ">-</span>
                  <p>Rs 5000</p>
                </div>

                <div className="grid grid-cols-4 text-center text-sm text-white gap-10 pt-5">
                  <p>3 month</p>
                  <span>Rs 15000</span>
                  <span className="text-red-500 ">20% Off</span>
                  <p>Rs 11,900</p>
                </div>

                <div className="grid grid-cols-4 text-center text-white gap-10 pt-5 text-sm">
                  <p>6 month</p>
                  <span>Rs 30000</span>
                  <span className="text-red-500 ">35% Off</span>
                  <p>Rs 19,900</p>
                </div>

                <div className="grid grid-cols-4 text-center text-white gap-10 pt-5 text-sm">
                  <p>12 month</p>
                  <span>Rs 60000</span>
                  <span className="text-red-500 ">50% Off</span>
                  <p>Rs 19,900</p>
                </div>

                {/* Subscribe Now */}
                <div className="mt-5">
                  <button className="mx-24  whitespace-nowrap bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-5">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>

            {/* Invest Advice */}
            <div
              className="w-[23rem] lg:w-[30rem] mb-10 h-[50rem] lg:h-[44rem] mt-10  mx-auto  pt-8  lg:p-6 rounded-lg shadow-lg"
              style={{
                background: "#8e2de2",
                backgroundImage:
                  "-webkit-linear-gradient(to right, #8e2de2, #4a00e0)",
                backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)",
              }}
            >
              <h2 className="text-white text-2xl text-center mb-2">
                Invest Advice
              </h2>
              <p className="text-gray-400 text-center mb-5">
                Holding Period: 1-3 weeks
              </p>

              <p className="text-white text-left px-5">
                Create wealth by earning a higher return on your money. Let your
                hard earned money work harder when you sleep.
              </p>

              <div className="text-white text-left text-lg px-5 pt-8">
                <p className="mb-2">✅ top 14-16 investment advice/year</p>
                <p className="mb-2">
                  ✅ fundamentally strong undervalued stock
                </p>
                <p className="mb-2">
                  ✅ short to medium term investment (1-2 years)
                </p>
                <p className="mb-2">
                  ✅ greate margin of safety, low downside risk
                </p>
                <p>✅ excellent risk removed ratio from 1:6 to 1:20</p>
              </div>

              {/* Pricing Section */}
              <div>
                <h2 className="text-green-500 text-2xl text-left mt-10">
                  Pricing
                </h2>
                <div className="grid grid-cols-4 text-white text-center gap-10 pt-5 text-sm px-5">
                  <p>1 month</p>
                  <span>Rs 5000</span>
                  <span className="text-red-500 ">35% Off</span>
                  <p>Rs 5000</p>
                </div>

                <div className="grid grid-cols-4 text-white text-center gap-10 pt-5 text-sm px-5">
                  <p>3 month</p>
                  <span>Rs 15000</span>
                  <span className="text-red-500 ">50% Off</span>
                  <p>Rs 11,900</p>
                </div>

                {/* Subscribe Now */}
                <div className="mt-3 lg:mt-8">
                  <button className="mx-28 lg:mx-36  whitespace-nowrap bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-5">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Power is Numbers */}
        <div className="w-full h-[54rem] lg:h-[20rem] bg-white mt-10 lg:mx-auto pt-5 lg:p-2 rounded-lg  ">
          <h2 className="text-center text-2xl md:text-3xl lg:text-3xl font-bold text-gray-700 pt-5 uppercase">
            Our Power is Numbers
          </h2>
          <div className="flex flex-col lg:flex-row justify-evenly px-36 gap-7 lg:gap-10 pt-10 lg:pt-20">
            <div>
              <h2 className="text-7xl text-center text-gray-400 mb-4">14</h2>
              <p className="uppercase text-sm font-bold text-blue-800">
                Years wealth creation experience
              </p>
            </div>

            <div className="w-[2px] full bg-gray-300"></div>

            <div>
              <h2 className="text-7xl  text-gray-400 mb-4">85%</h2>
              <p className="uppercase text-sm font-bold text-blue-800">
                Trading Success
              </p>
            </div>

            <div className="w-[2px] full bg-gray-300"></div>

            <div>
              <h2 className="text-7xl text-gray-400 mb-4">96%</h2>
              <p className="uppercase text-sm font-bold text-blue-800">
                Investment Success
              </p>
            </div>

            <div className="w-[2px] full bg-gray-300"></div>

            <div>
              <h2 className="text-7xl text-gray-400 mb-4">2000+</h2>
              <p className="uppercase text-sm font-bold text-blue-800">
                Client Satisfication
              </p>
            </div>
          </div>
        </div>

        {/* Subscribe with Us */}
        <div
          className="w-full h-[43rem] lg:h-[24rem] bg-white lg:mx-auto pt-8  lg:p-6 rounded-lg shadow-lg "
          style={{
            background: "#8e2de2",
            backgroundImage:
              "-webkit-linear-gradient(to right, #8e2de2, #4a00e0)",
            backgroundImage: "linear-gradient(to right, #8e2de2, #4a00e0)",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-around">
            {/* Subscribe with us section */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white pt-5 ">
                Subscribe with Us
              </h2>
              <p className="text-lg md:text-3xl lg:text-xl text-center font-bold text-white pt-3">
                Get free Trading tip and Investment advice
              </p>

              {/* Input and Button Form */}
              <div className="mt-8 lg:mt-10 ml-0">
                <form>
                  <div className="flex flex-wrap items-center justify-start">
                    <div className="w-full ">
                      <div className="ml-0 lg:ml-5 bg-white border border-dashed rounded-lg p-1">
                        <div className="flex flex-wrap items-center gap-0">
                          <div className="w-full md:w-8/12 sm:w-8/12">
                            <div className="relative ">
                              <input
                                type="email"
                                className="form-control-md  outline-0	 font-semibold  w-full py-2"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="w-full md:w-4/12 sm:w-4/12 mt-10 md:mt-0">
                            <button
                              type="button"
                              className="btn-md bg-yellow-500 text-black w-full font-medium py-3"
                            >
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <p className="text-sm text-left text-center pl-5 font-bold text-white pt-3">
                We respect your <span className="text-black">privacy.</span>
              </p>
            </div>

            {/* Slider Section */}
            <div className="w-[20rem] h-[20rem] mt-10  lg:w-[30rem] mx-auto lg:mx-0">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="mt-5 w-[20rem] mx-auto">
                      <p className="text-white text-lg text-center">
                        {item.detail}
                      </p>
                      <div className="flex justify-center gap-10 mt-5">
                        <img
                          src=""
                          alt="Not Found"
                          className="w-12 h-12 object-cover rounded-full"
                        />
                        <div>
                          <h2 className="text-white text-xl font-bold">
                            {item.name}
                          </h2>
                          <p className="text-white">{item.profession}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
