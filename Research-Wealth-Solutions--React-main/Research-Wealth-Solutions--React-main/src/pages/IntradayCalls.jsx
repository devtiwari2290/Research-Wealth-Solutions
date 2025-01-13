import React from "react";
const IntradayCalls = () => {
  const Cards = [
    {
      image: "publicimageslogo.png",
      date: "11/27/2024",
      name: "VITMA LABS",
      purchase: "Buy",
      price: "870-871",
      target: "910-925",
      stoplossat: "840",
    },

    {
      image: "publicimageslogo.png",
      date: "11/27/2024",
      name: "ERIS LIFE",
      purchase: "Buy",
      price: "1470-1471",
      target: "1500-1510",
      stoplossat: "1430",
    },

    {
      image: "publicimageslogo.png",
      date: "11/27/2024",
      name: "GILLETE",
      purchase: "Buy",
      price: "10450-10500",
      target: "10900-11000",
      stoplossat: "10150",
    },
  ];

  return (
    <>
      <div className="w-full">
        {/* Intraday Banner */}
        <div id="banner">
          <div className="relative">
            <img
              src={`${origin}/images/banner.jpg`}
              alt="..."
              className="w-full object-cover h-20 lg:h-28 "
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center ">
              <div className="w-full px-2 py-3">
                <div className="max-w-7xl mx-auto ">
                  <div className="mb-2">
                    <div className="text-white text-center lg:text-left pl-5 lg:pl-0 text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-bold max-w-3xl uppercase ">
                      Intraday Calls
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards Section of Intraday */}
      <div
        className="max-w-6xl mx-8 lg:mx-auto min-h-screen mt-14 mb-14"
        style={{
          background: "#ada996",
          backgroundImage:
            "-webkit-linear-gradient(to left, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",
          backgroundImage:
            "linear-gradient(to left, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",
        }}
      >
        {/* Heading */}
        <h1 className="text-2xl text-center lg:text-left lg:text-3xl font-light text-black p-5">
          Intraday Calls for Today
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-7">
          {Cards.map((card, index) => (
            <div className="bg-white rounded-lg shadow-md pb-5">
              {/* Card content */}
              <div className="bg-black h-36 p-3 ">
                <div className="flex items-center justify-around">
                  <img src="public\images\logo.png" className="h-12" alt="" />
                  <h2 className="text-lg lg:text-2xl text-white">
                    {card.date}
                  </h2>
                </div>
                <h2 className="text-lg lg:text-2xl text-white text-center pt-3">
                  {card.name}
                </h2>
                <p className="text-base text-white text-center pt-1">
                  {card.purchase}
                </p>
              </div>
              {/* End of card content */}
              <div className="mx-5 py-3 mt-10 max-w-5xl bg-gray-200 border-t border-b  border-gray-300 flex items-center justify-between px-5">
                <h2 className="text-base font-semibold text-gray-600">
                  Buy at
                </h2>
                <p className="text-base font-semibold text-gray-600 text-center">
                  {card.price}
                </p>
              </div>

              {/*  */}
              <div className="mx-5 py-3 mt-6 max-w-5xl bg-gray-200 border-t border-b  border-gray-300 flex items-center justify-between px-5">
                <h2 className="text-base font-semibold text-gray-600">
                  Today's Target
                </h2>
                <p className="text-base font-semibold text-gray-600 text-center">
                  {card.target}
                </p>
              </div>

              {/*  */}
              <div className="mx-5 py-3 mt-6 max-w-5xl bg-gray-200 border-t border-b border-gray-300 flex items-center justify-between px-5">
                <h2 className="text-base font-semibold text-gray-600">
                  Stop loss at
                </h2>
                <p className="text-base font-semibold text-gray-600 text-center">
                  {card.stoplossat}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Heading - What is Intraday Trading? */}
        <div className="text-center p-5">
          <h1 className="text-2xl  lg:text-3xl font-light text-black pb-2 uppercase">
            WHAT IS INTRADAY TRADING ?
          </h1>
          <p className="text-base text-gray-600 px-5">
            The word ‘Intraday’ means ‘occuring within the course of one day’.
            This type of trading which involves the movement of equity, shares,
            stocks, index futures, index options, and any significant commodity
            within the same day, building upon the advantages of price moves
            throughout the day is known as Intraday Trading. Furthermore,
            intraday trading calls give the recommendations to either buy or
            sell a financial instrument (equity, shares, stocks, index futures,
            index options) after having a deep reflection on technical data
            points where the positions have to be inserted or deleted on the
            same trading day. Intraday is often used to call attention to the
            new highs and lows of a commodity up for trade. For example, ‘a new
            intraday high’ refers to a commodity that has reached a relatively
            new higher market value during a trading session. This can also be
            equal to the closing price for some cases.
          </p>
        </div>

        {/* Heading- Square off in Trading */}
        <div className="text-center p-5">
          <h1 className="text-2xl  lg:text-2xl font-light text-black pb-2">
            Square off in Trading
          </h1>
          <p className="text-base text-gray-600 px-5">
            Traders involved in intraday trading keep a close track of intraday
            price movement by making use of graphical representations and
            real-time charts in order to build a strategy and maximize their
            benefits during the short-lasting price fluctuations. A technique
            called the Square Off is majorly used by the intraday investors to
            reverse the position and book profit or loss
          </p>
        </div>

        {/* Heading- Example of Intraday Trading*/}
        <div className="text-center p-5">
          <h1 className="text-2xl  lg:text-2xl font-light text-black pb-2">
            Example of Intraday Trading
          </h1>
          <p className="text-base text-gray-600 px-5">
            Consider an example where a trader buys 150 shares of Facebook Inc
            on some given date at Rs. 1500 around 10 am. The trader then sells
            these 150 shares on the same day at around 2:30 pm at Rs. 1530. In
            this situation, the trader is squaring off his position in the given
            trading session and is generating a profit of Rs. 30 per share. With
            a total of 150 shares, the trader has made a cumulative profit of
            Rs. 4500. This is a classic example of intraday trading. Just as a
            coin has two sides, Intraday Trading too has a lot of advantages and
            disadvantages associated with it.
          </p>
        </div>

        {/* Heading- Advantages of Intraday Trading: */}
        <div className="text-left p-5">
          <h1 className="text-2xl  lg:text-2xl font-light text-black pb-2 uppercase pl-5">
            Advantages of Intraday Trading
          </h1>
          <ul typeof="disc" className="text-base text-gray-600 px-5 ">
            <li>
              ➡ No overnight risk as the position is not affected by any
              negative news or events.
            </li>

            <li> ➡ Flexibility to trade even with a limited capital base.</li>

            <li>
              ➡ Provides an opportunity to work from anywhere at your comfort.
            </li>

            <li>➡ Allows you to utilize tight stop-loss orders</li>

            <li>
              ➡ Meager brokerage with many brokers giving as low as one paise
              for intraday trading.
            </li>

            <li>
              ➡ Perfect opportunity for traders to learn more and access
              leverages.
            </li>
          </ul>
        </div>

        {/* Heading- Disadvantages of Intraday Trading:*/}
        <div className="p-5">
          <h1 className="text-2xl text-center lg:text-2xl font-light text-black pb-2 uppercase">
            Disadvantages of Intraday Trading:
          </h1>
          <p className="text-sm text-gray-600 text-center px-5">
            Having a practical approach and focussing on the damages that can be
            caused by Intraday trading is highly imperative to carry out a
            decent trade.
          </p>
          {/* Heading- Points to Remember */}
          <h2 className="text-left lg:text-base whitespace-nowrap font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Increased degree of risk
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            - As it is a short-term trading, the decisive abilities of the
            trader should be highly polished. Any wrong decision can lead to
            humungous losses within a span of seconds.
          </p>

          <h2 className="text-left lg:text-base whitespace-nowrap font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Quality and Quantity
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            - Traders are generally inclined towards making more number of
            profitable transactions while the investors focus on the quality of
            the trade.
          </p>

          <h2 className="text-left lg:text-base whitespace-nowrap font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Time Consuming
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            - Demands a lot of time and energy from the individual. The trader
            must not perform any other job or task simultaneously.
          </p>

          <h2 className="text-left lg:text-base whitespace-nowrap font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Requires knowledge
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            - Intraday Trading needs the trader to have some amount of knowledge
            about the various trading strategies and technicalities.
          </p>

          <h2 className="text-left lg:text-base whitespace-nowrap font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Patience and Perseverance
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            - Creating wealth through this trading requires a lot of waiting
            instead of indecisive buying-selling and requires strict attention
            along with mental strength to pull off an efficient trade.
          </p>
        </div>

        {/* Heading- Tips and Strategies for Intraday Trading:*/}
        <div className="p-5">
          <h1 className="text-2xl text-center lg:text-2xl font-light text-black pb-2 uppercase">
            Tips and Strategies for Intraday Trading:
          </h1>
          {/* Heading- Tips to Remember */}
          <h2 className="text-left lg:text-base  font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Tip 1- Have Persistence In Gaining Profits:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            Patience is the key to intraday trading. Do not be in a hurry to buy
            and sell commodities to raise profits and try to last through the
            price movements for the entire day’s session.
          </p>

          <h2 className="text-left lg:text-base  font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Tip 2- Less is More:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            Focussing your strategies on fewer stocks is much more efficient and
            profitable than to focus on too many stocks at the same time. Thus,
            avoid developing your interests in a variety of stocks.
          </p>

          <h2 className="text-left lg:text-base   font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Tip 3- Gracefully cut the losses:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            If the outcome is not what you expected, settle in and exit the
            trade using the stop loss principle, keeping in mind the profits and
            loss that you are ready to bear.
          </p>

          <h2 className="text-left lg:text-base font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Tip 4- Try not to become an Investor involuntarily:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            If the commodity has not given the anticipated result, do not let it
            turn into an investment involuntarily. The whole idea behind
            intraday trading is to bring profits to reality, with no open
            positions at the end of the session.
          </p>

          <h2 className="text-left lg:text-base font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Tip 5- Be Emotionally Intelligent:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            Technical analysis and principles are secondary keys to this
            trading. Intraday Trading wants you to be emotionally stable as it
            is quite demanding on the nerves. Sometimes, one can benefit a lot
            by paying heed to the uneasiness of trade, while squaring off offers
            a major relief. Focus on this part
          </p>

          <h2 className="text-left lg:text-base font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Tip 6- Strategize:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            Make sure that you plan out the execution of the trade in such a way
            that you get maximum profit and fewer losses. Focus on analyzing and
            buying a watermelon with a lesser number of seeds.
          </p>

          <h2 className="text-left lg:text-base font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Tip 7- Evaluate your mistakes:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            If you incur losses continuously over a period of time, then sit
            back and ponder over the mistakes that you are making. Make notes
            and try to find out a reason or a pattern behind the failure. This
            will definitely increase your confidence and reasoning abilities.
          </p>

          <h2 className="text-left lg:text-base font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Tip 8- Have Realistic Goals:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            With predefined entry and exit methods, set a limit to the amount of
            risk that comes with each trade. Having a strategized goal does not
            mean that it will lead to profit always, however, it should give you
            a calculated ratio profit and loss that does not hurt you in the
            long run.
          </p>

          <h2 className="text-left lg:text-base font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Tip 9- Do not buy in on margins:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            Buying in on margins means that borrowing capital from a broker to
            carry out a trade. This can be quite detrimental to your capital
            resources. Using one’s own capital to buy stocks is the only
            intelligent way to make a trade. Client-Broker relationship is quite
            parasitic in nature. If the client will prosper, the broker will
            fail.
          </p>

          <h2 className="text-left lg:text-base font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Tip 10- Health is the biggest wealth:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            It is very crucial to think about yourself if you are active in
            intraday trading. Take short breaks and relax your mind in order to
            avoid undue pressure in the race to make profits.
          </p>
        </div>

        {/* Heading- Who Should Engage in Intraday Trading?*/}
        <div className="p-5">
          <h1 className="text-2xl text-center lg:text-2xl font-light text-black pb-2 uppercase">
            Who Should Engage in Intraday Trading?
          </h1>
          {/* Heading- Points to Remember */}
          <h2 className="text-left lg:text-base whitespace-nowrap font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Basic Capital Requirement:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            Having enough liquidity in account ensures and brings out a sense of
            security if you are involved in intraday trading. Individuals with
            sufficient capital can buy multiple stocks at the same time whereas
            those with a limited capital think of making larger profits through
            smaller inputs by intraday trading. These people with limited
            resources can generate profitable trades by having the right mindset
            and motivation.
          </p>

          <h2 className="text-left lg:text-base whitespace-nowrap font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Personal Factors:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            Intraday Trading is for those individuals who desire to gain a
            profit on daily basis and want to maintain a stable portfolio.
            Participants that require certain money over different time frames
            with anticipated return rates, and compunding do not want to sit for
            intraday trading.
          </p>

          <h2 className="text-left lg:text-base whitespace-nowrap font-semibold text-black pb-1 uppercase pl-1 lg:pl-10">
            • Availability of Time:
          </h2>
          <p className="text-sm text-gray-600 text-left px-5 pl-5 lg:pl-14">
            Every day at Intraday trading is a new lesson.This lesson requires
            one to judiciously learn new trends, analyze, open positions, and
            monitor progress. For a person who is engaged full time in a
            demanding profession, or business may not be the right fit for
            Intraday trading. This trading has tremendous profits to offer to
            people who can dedicate themselves with a lot of risk-taking
            abilities and decisiveness.
          </p>
        </div>
      </div>
    </>
  );
};
export default IntradayCalls;
