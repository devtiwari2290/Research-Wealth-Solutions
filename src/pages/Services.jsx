import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="w-full">
        {/* Services Banner */}
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
                      Services
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Table Section */}
      <div className="flex justify-center min-h-screen bg-gray-100 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 w-full max-w-6xl px-4 ">
          {/* Left Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse bg-white shadow-lg rounded-lg w-5/6">
              <thead>
                <tr className="bg-[rgb(41,170,152)] text-white">
                  <th className="py-4 px-6 text-left text-lg">Package</th>
                  <th className="py-4 px-6 text-center text-lg">Monthly</th>
                  <th className="py-4 px-6 text-center text-lg">Quarterly</th>
                  <th className="py-4 px-6 text-center text-lg">Six Months</th>
                  <th className="py-4 px-6 text-center text-lg">Yearly</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300 hover:bg-[rgb(218,245,240)]">
                  <td className="py-4 px-6 text-left text-gray-800 font-medium">
                    BTST+SHORT TERM CALLS
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="monthly"
                      id="monthly-1"
                      className="mr-2"
                    />
                    <label
                      htmlFor="monthly-1"
                      className="text-gray-700 font-medium"
                    >
                      100
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="quarterly"
                      id="quarterly-1"
                      className="mr-2"
                    />
                    <label
                      htmlFor="quarterly-1"
                      className="text-gray-700 font-medium"
                    >
                      250
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="sixmonths"
                      id="sixmonths-1"
                      className="mr-2"
                    />
                    <label
                      htmlFor="sixmonths-1"
                      className="text-gray-700 font-medium"
                    >
                      450
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="yearly"
                      id="yearly-1"
                      className="mr-2"
                    />
                    <label
                      htmlFor="yearly-1"
                      className="text-gray-700 font-medium"
                    >
                      800
                    </label>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-[rgb(218,245,240)]">
                  <td className="py-4 px-6 text-left text-gray-800 font-medium">
                    MULTIBAGGER STOCKS + SHORT TERM CALL + BTST CALLS.
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="monthly"
                      id="monthly-2"
                      className="mr-2"
                    />
                    <label
                      htmlFor="monthly-2"
                      className="text-gray-700 font-medium"
                    >
                      150
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="quarterly"
                      id="quarterly-2"
                      className="mr-2"
                    />
                    <label
                      htmlFor="quarterly-2"
                      className="text-gray-700 font-medium"
                    >
                      400
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="sixmonths"
                      id="sixmonths-2"
                      className="mr-2"
                    />
                    <label
                      htmlFor="sixmonths-2"
                      className="text-gray-700 font-medium"
                    >
                      750
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="yearly"
                      id="yearly-2"
                      className="mr-2"
                    />
                    <label
                      htmlFor="yearly-2"
                      className="text-gray-700 font-medium"
                    >
                      1300
                    </label>
                  </td>
                </tr>
                {/* <!-- Add more rows as needed --> */}
              </tbody>
            </table>
            {/* Left Payment Details */}
            <div className="min-w-full mt-10 bg-white border p-6 rounded-lg shadow-lg">
              <h2 className="text-base lg:text-xl font-bold text-center text-teal-500 mb-4">
                Kindly Choose Pack as per your ease, And you can Pay Using your
                NETBANKING / GOOGLE PAY .
              </h2>
              <p className="text-gray-700 ">
                Pay Directly from your Bank or UPI App . Once you Paid the
                Amount, Do Send us whatsapp at 9988137985 or email at
                info@bullishindia.com
              </p>
            </div>

            {/* Left BTST+SHORT TERM CALLS  */}
            <div className="min-w-full mt-10 bg-white border p-6 rounded-lg shadow-lg">
              <h2 className="text-base lg:text-xl font-bold text-center text-teal-500 mb-4">
                BTST+SHORT TERM CALLS :
              </h2>
              <p className="text-gray-700 ">
                In this Pack, you'll Get Daily 1 - 2 Cash Calls (BTST+Short Term
                Calls ) you'll also get important market alerts during trading
                hours.
              </p>
            </div>

            {/* Left MULTIBAGGER STOCKS + SHORT TERM CALL + BTST CALLS. : */}
            <div className="min-w-full mt-10 bg-white border p-6 rounded-lg shadow-lg">
              <h2 className="text-base lg:text-xl font-bold text-center text-teal-500 mb-4">
                MULTIBAGGER STOCKS + SHORT TERM CALL + BTST CALLS. :
              </h2>
              <p className="text-gray-700 ">
                We offer 5-7 or sometimes 8 stocks in multibagger stocks (Stocks
                10x) per year. You can hold these stocks for 6 months (minimum)
                to 1 year or 2 years (maximum). Multibagger is the best way to
                make a profit because in intraday trading if you make income in
                one day, you can lose the very another day. But in delivery, if
                you hold good stocks, you can earn a huge profit. Each share
                will be provided to you with a gap of 2 or 3 months.
              </p>
            </div>
          </div>

          {/* Right Payment Card */}
          <div className="bg-white mt-10 p-6 rounded-lg shadow-lg w-full md:w-96">
            <h2 className="text-2xl font-bold text-center text-teal-500 mb-4">
              <u>Payment Info</u>
            </h2>
            <p>Name: Mr Dev Tiwari</p>
            <p>Bank Name: ICICI BANK</p>
            <p>Account Number: 001301595419</p>
            <p>Total Amount: Rs 10000</p>
            <button className="bg-blue-500 whitespace-nowrap mx-16  mt-10 hover:bg-blue-600 text-white font-light py-3 px-4 rounded">
              TRANSFER AMOUNT
            </button>
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
      </div>
    </>
  );
};
export default Services;
