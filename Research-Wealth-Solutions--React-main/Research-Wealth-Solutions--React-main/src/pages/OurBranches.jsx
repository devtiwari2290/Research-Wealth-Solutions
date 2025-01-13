import React from "react";
import { Link } from "react-router-dom";

const OurBranches = () => {
  const Cards = [
    {
      content: "Stock 10x",
      name: "INDIAMART",
      detail1: "Bought at",
      detail2: "Hit",
      detail3: "Completed In",
      target: "Target Achieved",
    },
    {
      content: "Stock 10x",
      name: "IOL CHEMICAL",
      detail1: "Bought at",
      detail2: "Hit",
      detail3: "Completed In",
      target: "Target Achieved",
    },
    {
      content: "Stock 10x",
      name: "LTI",
      detail1: "Bought at",
      detail2: "Hit",
      detail3: "Completed In",
      target: "Target Achieved",
    },
    {
      content: "Stock 10x",
      name: "JB CHEMICALS",
      detail1: "Bought at",
      detail2: "Hit",
      detail3: "Completed In",
      target: "Target Achieved",
    },
    {
      content: "Stock 10x",
      name: "ECLERX",
      detail1: "Bought at",
      detail2: "Hit",
      detail3: "Completed In",
      target: "Target Achieved",
    },
    {
      content: "Stock 10x",
      name: "LTTS",
      detail1: "Bought at",
      detail2: "Hit",
      detail3: "Completed In",
      target: "Target Achieved",
    },
    {
      content: "Stock 10x",
      name: "PLOYCAB",
      detail1: "Bought at",
      detail2: "Hit",
      detail3: "Completed In",
      target: "Target Achieved",
    },
    {
      content: "Stock 10x",
      name: "REFEX",
      detail1: "Bought at",
      detail2: "Hit",
      detail3: "Completed In",
      target: "Target Achieved",
    },
    {
      content: "Stock 10x",
      name: "KTKBANK",
      detail1: "Bought at",
      detail2: "Hit",
      detail3: "Completed In",
      target: "Target Achieved",
    },
    {
      content: "Stock 10x",
      name: "MAZDOCK",
      detail1: "Bought at",
      detail2: "Hit",
      detail3: "Completed In",
      target: "Target Achieved",
    },
    {
      content: "Stock 10x",
      name: "AGI GREENPAC",
      detail1: "Bought at",
      detail2: "Hit",
      detail3: "Completed In",
      target: "Target Achieved",
    },
    {
      content: "Stock 10x",
      name: "BANCO INDIA",
      detail1: "Bought at",
      detail2: "Hit",
      detail3: "Completed In",
      target: "Target Achieved",
    },
  ];
  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 pb-10">
        {/* Our Branches Banner */}
        <div id="banner">
          <div className="relative">
            <img
              src={`${origin}/images/banner.jpg`}
              alt="..."
              className="w-full object-cover h-20 lg:h-28"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center ">
              <div className="w-full px-2 py-3">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-2">
                    <div className="text-white text-center lg:text-left pl-5 lg:pl-0 text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-bold max-w-3xl uppercase">
                      Our Branches
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Heading */}
        <div className=" flex flex-col lg:flex-row justify-center gap-10 px-8 py-10">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl text-gray-600 font-semibold pt-5 uppercase py-1 border-b border-gray-300">
              Multibagger Stocks
            </h2>
            <div className="w-[20rem] lg:w-[40rem] min-h-[20rem] bg-gray-200 p-6 rounded-lg shadow-lg mt-5">
              <img src="public\images\logo.png" className="h-20" alt="" />
              <h2 className="text-2xl text-gray-600 text-center font-semibold pt-5">
                Short Term Multibagger Stocks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
                <div className="py-7 mx-7 bg-blue-500 rounded-lg shadow-lg text-center text-white text-3xl">
                  <h3>Buy</h3>
                </div>

                <div className="py-7 mx-7 bg-blue-500 rounded-lg shadow-lg text-center text-white text-3xl">
                  <h3>Target</h3>
                </div>

                <div className="py-7 mx-7 bg-blue-500 rounded-lg shadow-lg text-center text-white text-3xl">
                  <h3>Duration</h3>
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
              {Cards.map((cards) => (
                <div
                  className="p-5 rounded-lg shadow-lg hover:scale-[1.07] transition duration-[.5s] ease-in-out"
                  style={{
                    background: "#d66d75",
                    backgroundImage:
                      "-webkit-linear-gradient(to left, #d66d75, #e29587);",
                    backgroundImage:
                      "linear-gradient(to left, #d66d75, #e29587);",
                  }}
                >
                  <img src="public\images\logo.png" className="h-8" alt="" />
                  <h2 className="text-xl font-bold text-center text-white mb-2">
                    {cards.content}
                  </h2>
                  <div className="text-center px-3 py-2 bg-white rounded-3xl font-semibold">
                    {cards.name}
                  </div>
                  <div className="text-gray-700 py-5 leading-relaxed">
                    <div className="bg-black text-white px-3 py-2 rounded-lg mb-3">
                      <p>{cards.detail1}</p>
                    </div>
                    <div className="bg-black text-white px-3 py-2 rounded-lg mb-3">
                      <p>{cards.detail2}</p>
                    </div>
                    <div className="bg-black text-white px-3 py-2 rounded-lg">
                      <p>{cards.detail3}</p>
                    </div>
                  </div>

                  {/* Target */}
                  <div className="bg-white px-5 py-2 text-center font-semibold text-xl">
                    <p>{cards.target}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center lg:text-left mt-10">
              <button
                type="submit"
                className="bg-blue-500  mt-4 hover:bg-blue-600 text-white font-light py-3 px-4 rounded"
              >
                Subscribe For More
              </button>
            </div>
          </div>

          {/* Right Payment Card */}
          <div className="bg-white mt-10 p-6 rounded-lg shadow-xl w-full h-full md:w-96">
            <h2 className="text-2xl font-bold text-center text-teal-500 mb-4">
              <u>Contact Us</u>
            </h2>
            <div className="text-gray-700 text-center leading-relaxed">
              <p>#1256 , Sector 34-C, Chandigarh</p>
              <p>M: +91-9988137985</p>
              <p>Account Number: 001301595419</p>
            </div>

            <Link to="info@bullishindia.com">
              <p className="text-center text-blue-700">info@bullishindia.com</p>
            </Link>

            {/* Payment Detail Section */}
            <h2 className="text-3xl font-bold text-center text-teal-500 mt-10 pb-4">
              <u>Payment Details</u>
            </h2>
            <h5 className="text-base font-bold text-center text-gray-500">
              <span className="font-semibold mr-2 text-blue-500">
                BANK NAME:
              </span>{" "}
              ICICI BANK
            </h5>
            <img
              src="public\qr-code.jpeg"
              className="mx-auto border-2 border-gray-300"
              alt=""
            />
            <p className="text-center text-blue-500 font-semibold">
              Or you can pay via this Link:-
            </p>
            <Link to="https://rpy.club/g/dKrlCvTlCp">
              <p className="text-center text-blue-700">
                https://rpy.club/g/dKrlCvTlCp
              </p>
            </Link>
            <p className="text-center text-gray-600 text-xs pt-2">
              Remember to WhatsApp the UPI Transaction ID at +91 8900099999 to
              verify the transaction.
            </p>

            {/* Account 1 */}
            <hr className="my-4 border-gray-300 border" />
            <h2 className="text-lg font-bold text-center text-blue-500 mt-4 pb-4">
              Account 1
            </h2>

            <hr className="my-2 border-gray-300 border" />
            <h2 className="text-lg font-bold text-center text-blue-500 mt-5">
              A/C HOLDER NAME
            </h2>
            <p className="text-center text-gray-600 text-base">
              Research Wealth Solutions
            </p>

            <hr className="my-5 border-gray-300 border" />
            <h2 className="text-lg font-bold text-center text-blue-500 mt-5">
              Account Number
            </h2>
            <p className="text-center text-gray-600 text-base">001305013390</p>

            <hr className="my-5 border-gray-300 border" />
            <h2 className="text-lg font-bold text-center text-blue-500 mt-5">
              A/C TYPE
            </h2>
            <p className="text-center text-gray-600 text-base">Current</p>

            <hr className="my-5 border-gray-300 border" />
            <h2 className="text-lg font-bold text-center text-blue-500 mt-5">
              Branch
            </h2>
            <p className="text-center text-gray-600 text-base">
              ICICI BANK, SIPRI BAZAR, JHANSI
            </p>

            <hr className="my-5 border-gray-300 border" />
            <h2 className="text-lg font-bold text-center text-blue-500 mt-5">
              IFSC CODE
            </h2>
            <p className="text-center text-gray-600 text-base">ICIC0000013</p>

            {/* Account 2 */}
            <hr className="my-4 border-gray-300 border" />
            <h2 className="text-lg font-bold text-center text-blue-500 mt-5">
              Account 2
            </h2>

            <hr className="my-5 border-gray-300 border" />
            <h2 className="text-lg font-bold text-center text-blue-500 ">
              A/C HOLDER NAME
            </h2>
            <p className="text-center text-gray-600 text-base">Dev Tiwari</p>

            <hr className="my-5 border-gray-300 border" />
            <h2 className="text-lg font-bold text-center text-blue-500 mt-5">
              Account Number
            </h2>
            <p className="text-center text-gray-600 text-base">001301595419</p>

            <hr className="my-5 border-gray-300 border" />
            <h2 className="text-lg font-bold text-center text-blue-500 mt-5">
              A/C TYPE
            </h2>
            <p className="text-center text-gray-600 text-base">Saving</p>

            <hr className="my-5 border-gray-300 border" />
            <h2 className="text-lg font-bold text-center text-blue-500 mt-5">
              Branch
            </h2>
            <p className="text-center text-gray-600 text-base">
              ICICI BANK, AWAS VIKAS, JHANSI
            </p>

            <hr className="my-5 border-gray-300 border" />
            <h2 className="text-lg font-bold text-center text-blue-500 mt-5">
              IFSC CODE
            </h2>
            <p className="text-center text-gray-600 text-base">ICIC0000013</p>
          </div>
        </div>

        {/* Headings Section of MUltibagger Stocks */}
        <div className="max-w-4xl bg-white p-6 rounded-lg shadow-lg mx-auto">
          <p>
            After, huge request from our clients we have started providing a
            special service, called STOCKS 10x, to our worthy clients since
            August 2018. Stocks 10x is a High Return Delivery stocks which is
            increased by several times in a very short period of time. Stocks
            that give returns that are many times their costs are called
            multibagger stocks. This service is special offered to those who are
            fed up with everyday intraday trading and BTST, it is a sort of
            trouble-free long term investment which gives you a return of more
            than 100%. Multibagger stocks provided by our analysts will help you
            increase your investment multiple times.
          </p>

          {/* Heading- What Do we include In Our Multibagger Stocks (Stocks 10x)? */}
          <div className="mt-10">
            <h1 className="text-2xl text-gray-600 font-bold uppercase mb-3">
              What Do we include In Our Multibagger Stocks (Stocks 10x)?
            </h1>
            <ul type="disc" className="text-gray-600 text-base">
              <li>
                1. Bullish India offers five stocks in multibagger stocks per
                year.
              </li>

              <li>
                2. You can hold these stocks for 6 months (minimum) to 1 year or
                2 years (maximum).
              </li>

              <li>
                3. Multibagger is the best way to make a profit because in
                intraday trading if you make income in one day, you can lose the
                very another day. But in delivery, if you hold good stocks, you
                can earn a huge profit.
              </li>

              <li>
                4. Each share will be provided to you with a gap of 2 or 3
                months.
              </li>
            </ul>
          </div>

          {/* Heading- Our Multibagger Stocks Achievements */}
          <div className="mt-10">
            <h1 className="text-2xl text-gray-600 font-bold uppercase mb-3">
              What Do we include In Our Multibagger Stocks (Stocks 10x)?
            </h1>
            <ul type="disc" className=" text-gray-600 text-base">
              <li>1. I O L CHEMICAL</li>

              <li>2. INDIAMART</li>

              <li>3. POLYCAB</li>

              <li>4. SADHNA NITRO</li>

              <li>5. REFEX ind.</li>

              <li>6. LTI (LARSEN AND TOUBRO INFOTECH )</li>

              <li>7. MANGALAM ORGANICS</li>

              <li>8. NAM- INDIA</li>

              <li>9. INDIAMART Again Bought @ 2450 Level.</li>

              <li>10. ECLERX</li>

              <li>11. JB-CHEMICALS</li>

              <li>12. LTTS</li>
            </ul>
          </div>

          {/* Image Section */}

          {/* Heading- Our Multibagger Stocks Achievements */}
          <div className="mt-10">
            <h1 className="text-2xl text-gray-600 font-bold uppercase mb-3">
              What Is Multibagger Stock?
            </h1>
            <p className="mb-3">
              A Multibagger stock is difficult to define but you can positively
              make out if you see one. A stock is known as a multibagger stock,
              if the price of that stock as per the fundamental and technical
              research and analysis, is increased by several times in a very
              short period of time.
            </p>

            <p className="mb-3">
              For instance, if you had invested Rs 10,000 in Wipro in 1980, then
              that investment after analyzing all the splits and bonuses would
              be around Rs 700cr+ at the current market price, with no extra
              endeavor from your side. We are not even including the Rs 2cr that
              you will be getting as dividends each year.
            </p>

            <p>
              Let’s have a look at the top 15 stocks which made many investors
              crorepati as they grew 10,000-55,000% in past 10 years, stocks
              like Tasty Bite Eatables Ltd, Avanti Feeds Ltd, Astral Poly
              Technik Ltd, Eicher Motors Ltd, Ajanta Pharma Ltd, Bharat Rasayan
              Ltd, La Opala RG Ltd, Vinati Organics Ltd, Symphony Ltd, Bajaj
              Finance Ltd, Relaxo Footwear Ltd, Safari Industries Ltd, Mayur
              Uniquoters Ltd, Natco Pharma Ltd, Sadhana Nitro Chem Ltd. These
              stocks have been multibagger many times over.
            </p>
          </div>

          {/* Heading- What Creates A Multibagger Stock? */}
          <div className="mt-10">
            <h1 className="text-2xl text-gray-600 font-bold uppercase mb-3">
              What Is Multibagger Stock?
            </h1>
            <p className="mb-3">
              There is not a single factor that creates a multibagger stock;
              basically, there have some or all of the following values in them.
            </p>

            <ul className="py-2">
              <li className="mb-1">
                • Multibaggers are the companies who are money-wise sound and
                have a great business figure that can be scaled within a short
                period of time. They must have a disruptive product or a
                disruptive idea in the business.
              </li>
              <li className="mb-1">
                • A capability to scale up quickly is at the essence of becoming
                a multibagger. If a company is presenting uninterrupted growth
                for a longer sustainable period of time, then it would surely
                turn out to be a multibagger stock in the future.
              </li>
              <li className="mb-1">
                {" "}
                • You just need to have a high amount of serenity while
                investing in these stocks because they take time for 5 to15
                years to become a profitable multibagger.
              </li>
              <li className="mb-6">
                • time for 5 to15 years to become a profitable multibagger. If
                we look at history then we can observe that small and mid-caps
                companies have offered the maximum number of multibagger stocks.
                Though, it does not mean that large-cap companies cannot be the
                multibagger stocks. Time and constant growth is what makes a
                stock is multibagger stock.
              </li>

              <p>
                If you already missed a few multibagger stocks in the past, no
                worries, Bullish India offers you a mind-blowing opportunity to
                gain profits. If you are fed up with doing Intra-Day & BTST then
                we are here to suggest you Stocks 10x, the best option for all
                of you.
              </p>
            </ul>
          </div>

          {/* Advantages of Investing in Multibagger Stocks with Bullish India */}
          <div className="mt-10">
            <h1 className="text-2xl text-gray-600 font-bold uppercase mb-3">
              Advantages of Investing in Multibagger Stocks with Bullish India
            </h1>
            <p className="mb-3">
              Multibaggers are important for some fundamental reasons. Even the
              professional and experienced trading investors do not get all
              their intraday trading calls correct. In fact, some of them do not
              even get most of their investments hit on target. In stock market,
              there are approximately 50% market performers, 30%
              underperformers, 15% outperformers, and just nearly 5%
              multibaggers. With this kind of blend, maximum portfolios are
              going to underperform the stock market. Getting into Titan at
              Rs.100 in 2005 and exiting at twice the price after a year is not
              excellent news. It is only when you make a 50-bagger in 10 years
              that you actually have a multibagger scene to show.
            </p>

            <p className="mb-3">
              The fact is multibagger stocks are strengthened by a company that
              raises constantly over a period of time, has some unique features
              such as honest management, efficient funds allocation strategies
              strong commercial production, and huge free cash progress.
            </p>

            <p className="mb-2">
              There are some significant advantages of investing in multibagger
              stocks:
            </p>

            <ul className="py-2">
              <div className="mb-3">
                <li className="mb-1 font-semibold">
                  1. Getting a Missed Opportunity Advantage
                </li>
                <p>
                  Several in the street term multibagger stocks as taking
                  advantage of missed opportunities. As a result, you get the
                  profit of buying these at a discount. You can bet on excellent
                  growth by taking advantage of something that the market
                  ignored. The stock may be underpriced just because the sector
                  is out of favor. By getting an opportunity to buy at a lower
                  price, you nail your bets on a reliable growth engine.
                </p>
              </div>

              <div className="mb-3">
                <li className="mb-1 font-semibold">
                  2. Significant Return on Equity
                </li>
                <p>
                  Normally the return on equity is in loads of ways your
                  percentage of profit from an investment. Without a doubt, the
                  multibagger stocks are associated with the highest returns. It
                  rewards its investors with an above-average profitability
                  margin. So by investing in these types of stocks, you are
                  easily catching up on the growth trend very easily.
                </p>
              </div>

              <div className="mb-3">
                <li className="mb-1 font-semibold">3. Change Makers</li>
                <p className="mb-3">
                  Multibagger stocks are turnaround scenes only because they can
                  productively go through failures. Normally the higher growth
                  is purely a process of some fundamental changes in the
                  business. Either the way the company managed its market or the
                  authority that created the problem is tackled efficiently.
                </p>

                <p className="mb-3">
                  As an outcome, you can get a superior growth scene without
                  really settling on the price levels. The price of the stock
                  suffered as the street undervalued the company’s
                  sustainability. By making a number of bold changes, the
                  company did not just secure greater growth. Also, it brought
                  out a reliable portfolio sign.
                </p>

                <p className="mb-3">
                  Multibagger made it possible for investors to get one unique
                  growth scene that quickly changed the picture of their
                  portfolio. A single multibagger can make a huge difference to
                  your portfolio gains.
                </p>
              </div>

              {/* Heading- Get the Expert Advice for investing in Multibagger Stocks */}
              <div className="mt-10">
                <h1 className="text-2xl text-gray-600 font-bold uppercase mb-3">
                  Get the Expert Advice for investing in Multibagger Stocks
                </h1>
                <p className="mb-3">
                  Finding a good stock is quite a tough task, so finding a
                  multibagger stock is like impossible. If you are a working
                  person then it is almost unmanageable to dedicate so much time
                  and energy to stock market analysis and research. The easiest
                  way for you is to sign up with a SEBI registered stock
                  research analyst company like Bullish India and get informed
                  share market tips, advice and suggestions from the experts.
                  And most importantly, it will significantly perk up your
                  probability of experiencing a multibagger growth.
                </p>

                <p className="mb-3">
                  We at Bullish India have specialized and personalized stock
                  market research analyst services for the multibagger returns
                  on investment. We don’t believe in making money until our
                  clients do. If you want to know more about our multibagger
                  stocks which are also known as Stocks 10x, you can make
                  contact with our SEBI registered research analysts at
                  <span className="font-semibold"> +91-9988137985 </span>or mail
                  your inquiry to{" "}
                  <span className="font-semibold">info@bullishindia.com</span>
                </p>

                <p>Charges Rs. 50000/- ( For 5 Stocks 10x )</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBranches;
