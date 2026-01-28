import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
        <li><Link to="/sneakers">SNEAKERS</Link></li>
        <li><Link to="/perfume">PERFUME</Link></li>
        <li><Link to="/jacket">JACKET</Link></li>
        <li><Link to="/tshirts">T-SHIRT</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/admin">ADMIN</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            CART
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;