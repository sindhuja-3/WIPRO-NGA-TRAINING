import { useCart } from "../context/CartContext";
import { TShirtsData } from "../data/Tshirts.json"

function TShirts() {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="products-page">
      <h1>T-Shirts</h1>

      <div className="products-grid">
        {TShirtsData.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div className="cart-buttons">
              <button
                className="add-btn"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TShirts;
