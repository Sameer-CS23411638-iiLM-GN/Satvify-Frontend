import { useCart } from "../../context/CartContext";
import "./CartDrawer.css";

function CartDrawer() {
    const { cartItems, removeFromCart } = useCart();

    const total = cartItems.reduce(
        (sum, item) => sum + Number(item.price.replace("₹", "")),
        0
    );

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>

            {cartItems.length === 0 ? (
                <p>Cart is Empty</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <img src={item.image} alt={item.title} />

                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.price}</p>
                            </div>

                            <button
                                onClick={() => removeFromCart(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="cart-total">
                        <h3>Total: ₹{total}</h3>

                        <button className="checkout-btn">
                            Proceed To Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartDrawer;