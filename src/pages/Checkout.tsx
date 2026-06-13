import { useCart } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
    const { cartItems } = useCart();

    const total = cartItems.reduce(
        (sum, item) =>
            sum + Number(item.price.replace("₹", "")),
        0
    );

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>

            <div className="checkout-card">
                <h2>Order Summary</h2>

                {cartItems.map((item) => (
                    <div key={item.id} className="checkout-item">
                        <span>{item.title}</span>
                        <span>{item.price}</span>
                    </div>
                ))}

                <hr />

                <h3>Total: ₹{total}</h3>

                <button className="pay-btn">
                    Proceed To Payment
                </button>
            </div>
        </div>
    );
}

export default Checkout;