// import { Link } from "react-router-dom";

// function Header() {
//   const { origin } = location;
//   return (
//     <>
//       <header className="px-2 py-3">
//         <div className="flex justify-between items-center gap-4 max-w-7xl mx-auto">
//           <Link to="/">
//             <img
//               src={`${origin}/images/logo.png`}
//               alt="..."
//               className="max-w-36"
//             />
//           </Link>
//           <div className="flex gap-4 items-center">
//             <Link
//               to="/"
//               className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about-us"
//               className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
//             >
//               About Us
//             </Link>
//             <Link
//               to="/services"
//               className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
//             >
//               Services
//             </Link>
//             <Link
//               to="/products"
//               className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
//             >
//               Products
//             </Link>
//             <Link
//               to="/intraday-calls"
//               className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
//             >
//               Intraday Calls
//             </Link>
//             <Link
//               to="/our-branches"
//               className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
//             >
//               Our Branches
//             </Link>
//             <Link
//               to="/contact-us"
//               className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
//             >
//               Contact Us
//             </Link>
//             <Link
//               to="/login"
//               className="uppercase font-medium text-sm cursor-pointer px-5 py-2 text-white rounded bg-customTheme-theme1 hover:bg-customTheme-theme2"
//             >
//               Log In
//             </Link>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { origin } = location;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="px-4 py-3 bg-white shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/">
            <img
              src={`${origin}/images/logo.png`}
              alt="Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 font-bold focus:outline-none text-3xl"
            aria-label="Toggle Menu"
          >
            <IoMdMenu />
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute lg:static lg:block top-16 left-0 w-full lg:w-auto bg-white shadow-lg lg:shadow-none z-50`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center gap-4 p-4 lg:p-0">
              <li>
                <Link
                  to="/"
                  className="uppercase font-bold text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="uppercase font-bold text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="uppercase font-bold text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="uppercase font-bold text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                  onClick={() => setMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/intraday-calls"
                  className="uppercase font-bold text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                  onClick={() => setMenuOpen(false)}
                >
                  Intraday Calls
                </Link>
              </li>
              <li>
                <Link
                  to="/our-branches"
                  className="uppercase font-bold text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                  onClick={() => setMenuOpen(false)}
                >
                  Our Branches
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="uppercase font-bold text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="uppercase font-bold text-sm cursor-pointer px-5 py-2 text-white rounded bg-customTheme-theme1 hover:bg-customTheme-theme2"
                  onClick={() => setMenuOpen(false)}
                >
                  Log In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
