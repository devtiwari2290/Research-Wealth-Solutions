import { Route, Routes } from "react-router-dom";
import StaticLayout from "./layouts/StaticLayout";
import Home from "./pages/Home";
import Login from "./components/Login";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Products from "./pages/Products";
import IntradayCalls from "./pages/IntradayCalls";
import ContactUs from "./pages/ContactUs";
import OurBranches from "./pages/OurBranches";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StaticLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/intraday-calls" element={<IntradayCalls />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-branches" element={<OurBranches />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
