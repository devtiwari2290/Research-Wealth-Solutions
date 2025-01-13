import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-100">
        {/* Contact Banner */}
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
                      Contact Us
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row justify-center gap-10 px-8 py-10">
          {/* Contact Form */}
          <div className="max-w-2xl h-full min-h-20 bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-base text-gray-600 font-semibold pt-5">
              It would be great to hear from you! Just drop us a line and ask
              for anything with which you think we could be helpful. We are
              looking forward to hearing from you!
            </h1>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full mt-4 py-3 px-4 border rounded-lg focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mt-4 py-3 px-4 border rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="Contact"
                className="w-full mt-4 py-3 px-4 border rounded-lg focus:outline-none"
              />
              <textarea
                placeholder="Message"
                className="w-full mt-4 py-10 px-4 border rounded-lg focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 mt-4 hover:bg-blue-600 text-white font-light py-3 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Payment Card */}
          <div className="bg-white mt-10 p-6 rounded-lg shadow-lg w-full md:w-96">
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
      </div>
    </>
  );
};

export default ContactUs;
