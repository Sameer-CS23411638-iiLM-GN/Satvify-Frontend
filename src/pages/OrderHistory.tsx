import { Link } from "react-router-dom";
import "./OrderHistory.css";

function OrderHistory() {
    const orders = [
        {
            id: "#ORD001",
            item: "Greek Salad",
            amount: "₹199",
            status: "Delivered",
        },
        {
            id: "#ORD002",
            item: "Protein Smoothie",
            amount: "₹249",
            status: "Out For Delivery",
        },
        {
            id: "#ORD003",
            item: "Vegan Bowl",
            amount: "₹299",
            status: "Preparing",
        },
    ];

    return (
        <div className="order-history">
            <h1>Order History</h1>

            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Track</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.item}</td>
                            <td>{order.amount}</td>
                            <td>{order.status}</td>
                            <td>
                                <Link to="/track-order">
                                    <button>Track Order</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderHistory;