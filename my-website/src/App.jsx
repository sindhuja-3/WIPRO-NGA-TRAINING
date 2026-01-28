import { Routes, Route } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext"; // ✅ Import ThemeProvider

import Header from "./Components/Header";
import Navbar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Categories from "./Components/Categories";

import Home from "./Pages/Home";
import Sneakers from "./Pages/Sneakers";
import Perfume from "./Pages/Perfume";
import Jacket from "./Pages/Jacket";
import TShirts from "./Pages/TShirts";
import Cart from "./Pages/Cart";

import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDasboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const { popup } = useCart();

  return (
    <ThemeProvider> {/* ✅ Wrap entire app with ThemeProvider */}
      {popup && <div className="popup">{popup}</div>}

      <div className="site-wrapper">
        <Header />
        <Navbar />

        <main className="layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/sneakers" element={<Sneakers />} />
            <Route path="/perfume" element={<Perfume />} />
            <Route path="/tshirts" element={<TShirts />} />
            <Route path="/jacket" element={<Jacket />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;