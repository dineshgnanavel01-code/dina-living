/*
 * Dina Living — Sunlit Editorial
 * Central React Router setup with a shared layout (Navbar + Footer).
 */
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { FavoritesProvider } from "../contexts/FavoritesContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import PropertyDetails from "../pages/PropertyDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Auth from "../pages/Auth";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:slug" element={<PropertyDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth/:mode" element={<Auth />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
