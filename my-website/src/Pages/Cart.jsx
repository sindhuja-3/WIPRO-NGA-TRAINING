import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <h2 className="empty-cart">Your cart is empty!</h2>;
  }

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />

          <div className="cart-details">
            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>

            <div className="cart-buttons">
              <button
                className="remove-btn"
                onClick={() => decreaseQty(item.id)}
              >
                −
              </button>

              <span className="qty">{item.quantity}</span>

              <button
                className="add-btn"
                onClick={() => increaseQty(item.id)}
              >
                +
              </button>
            </div>

            <button
              className="remove-btn big-remove"
              onClick={() => removeFromCart(item.id)}
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}

      
      <div className="cart-total">
        <h2>Total Price: ₹{total}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;