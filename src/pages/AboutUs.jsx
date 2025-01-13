const AboutUs = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section - About Us Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center text-teal-500 mb-4">
              About Us
            </h1>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <span className="font-semibold">Research Wealth Solutions</span>,
                led by our founder and Chief Analyst{" "}
                <span className="font-semibold">Miss Shruti Mishra</span>,
                 Research Analyst service. With her impressive academic
                background of <span className="italic">B.Com and M.Com</span> and
                her exceptional expertise in the Indian Financial Market, Sanchi
                has been passionately studying and analyzing the market for over
                a decade.
              </p>
              <p>
                Her passion for the stock market began at a young age while she
                was still a student. A remarkable moment in her journey was when
                she recommended some stocks to her father, which grew fivefold in
                just one year. Inspired by this early success and her love for
                equities, she decided to contribute to society by helping people
                generate wealth through value investing.
              </p>
              <p>
                Miss Shruti Mishra believes in identifying and recommending only futuristic
                stocks with the potential to become super multi-baggers. This
                vision and dedication led her to clear all three SEBI (Research
                Analyst) exams, equipping her to guide investors toward financial
                success in the stock market.
              </p>
            </div>
  
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2 text-teal-500">
                Our Mission
              </h2>
              <p className="text-gray-700">
                To empower investors with insightful and research-based
                recommendations, helping them achieve financial growth and
                security through value-driven investing.
              </p>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-center text-teal-500 mb-4">
                Get in Touch
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:teal-500"
                    rows="4"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-400 text-white py-2 rounded-lg hover:bg-teal-500 transition"
                >
                  Submit
                </button>
              </form>
            </div>
  
            {/* Contact Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-center text-teal-500 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                <strong>Address:</strong> SCO 150 & 55, Bridge Market, 17C,
                Sector 17, Chandigarh, 160017
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 7693898747
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> info@researchwealthsolutions.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  