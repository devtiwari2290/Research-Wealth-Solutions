import { Link } from "react-router-dom";
const Products = () => {
  const products = [
    {
      type: "Service Type",
      detail1:
        "Daily Rocket Calls 10 to 15 Days short term Calls + 15 Plus Multibagger Stocks in a year ",
      detail2: "Porfolios through Smallcase platform",
    },
    {
      type: "Suitable for",
      detail1: "Active investors + Long-term investors",
      detail2: "Passive investors",
    },
    {
      type: "Required fund for portfolio",
      detail1: "At least 5 Lakhs",
      detail2: "	At least 2 Lakhs",
    },
    {
      type: "Number of Stocks covered",
      detail1:
        "15 plus Multibagger stocks +20 to 25 Short term Stocks + Daily BTST& Rocket calls.",
      detail2: "8 to 15 stocks Portfolio",
    },
    {
      type: "Duration or Idea",
      detail1:
        "Short and Long term investment, BTST Stocks, High Risk/Reward Stocks",
      detail2: "Short and Long Term Stocks",
    },
  ];
  return (
    <>
      <div className="w-full">
        {/* Product Banner */}
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
                      Products
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards Section */}
      <div className="min-h-screen bg-gray-100 px-4 py-8 px-auto lg:px-40">
        <div className="flex justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl  min-h-24">
            {/* Card 1 */}
            <Link
              to="/page1"
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300 "
            >
              {/* Logo */}
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className="max-w-44 mx-auto mb-4"
              />
              {/* Heading */}
              <h2 className="text-base md:text-xl lg:whitespace-nowrap font-bold text-teal-700">
                Research Wealth Solutions
              </h2>
            </Link>

            {/* Card 2 */}
            <Link
              to="/page2"
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Logo */}
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className="max-w-44 mx-auto mb-4"
              />
              {/* Heading */}
              <h2 className="text-lg md:text-xl lg:whitespace-nowrap font-bold text-teal-700 ">
                Research Wealth Solutions
              </h2>
            </Link>
          </div>
        </div>

        {/* Products List */}
        <div className=" max-w-4xl  mx-auto mt-10  border border-gray-300 rounded-lg">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl pt-5 font-bold text-center text-teal-700 mb-8">
            Our Products Details
          </h1>
          {/* Product List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 pb-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center"
              >
                {/* Product Type */}
                <h2 className="text-lg md:text-xl font-bold text-teal-700 mb-2">
                  {product.type}
                </h2>
                {/* Product Details */}
                <ul className="list-disc pl-6">
                  <li className="mb-2">{product.detail1}</li>
                  <li className="mb-2">{product.detail2}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
    </>
  );
};
export default Products;
