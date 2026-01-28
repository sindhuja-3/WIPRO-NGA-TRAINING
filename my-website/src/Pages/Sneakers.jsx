import { useCart } from "../context/CartContext";
import { sneakers } from "../data/sneakers.json"; 




function Sneakers() {
  const { addToCart, removeFromCart, cart } = useCart();

  return (
    <div className="products-page">
      <h1>Sneakers</h1>
      <div className="products-grid">
        {sneakers.map((item) => (
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

export default Sneakers;
