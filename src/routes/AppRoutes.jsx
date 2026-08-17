import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import Home from "../pages/Home.jsx";
import Properties from "../pages/Properties.jsx";
import PropertyDetails from "../pages/PropertyDetails.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Auth from "../pages/Auth.jsx";
import Favorites from "../pages/Favorites.jsx";
import NotFound from "../pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function AppRoutes() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/:mode" element={<Auth />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
