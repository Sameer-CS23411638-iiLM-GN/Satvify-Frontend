// import "./OrderManagement.css";

// function OrderManagement() {
//     const orders = [
//         {
//             id: "#ORD001",
//             customer: "Rahul Sharma",
//             amount: "₹499",
//             status: "Delivered",
//         },
//         {
//             id: "#ORD002",
//             customer: "Priya Singh",
//             amount: "₹799",
//             status: "Processing",
//         },
//         {
//             id: "#ORD003",
//             customer: "Amit Verma",
//             amount: "₹299",
//             status: "Pending",
//         },
//         {
//             id: "#ORD004",
//             customer: "Neha Gupta",
//             amount: "₹999",
//             status: "Delivered",
//         },
//     ];

//     return (
//         <div className="order-management">
//             <h1>Order Management</h1>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Order ID</th>
//                         <th>Customer</th>
//                         <th>Amount</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {orders.map((order) => (
//                         <tr key={order.id}>
//                             <td>{order.id}</td>
//                             <td>{order.customer}</td>
//                             <td>{order.amount}</td>
//                             <td>
//                                 <span
//                                     className={`status ${order.status.toLowerCase()}`}
//                                 >
//                                     {order.status}
//                                 </span>
//                             </td>
//                             <td>
//                                 <button className="view-btn">
//                                     View
//                                 </button>

//                                 <button className="update-btn">
//                                     Update
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default OrderManagement;
import "./OrderManagement.css";

function OrderManagement() {
    const orders = [
        {
            id: "#ORD001",
            customer: "Rahul Sharma",
            amount: "₹499",
            status: "Delivered",
        },
        {
            id: "#ORD002",
            customer: "Priya Singh",
            amount: "₹799",
            status: "Processing",
        },
        {
            id: "#ORD003",
            customer: "Amit Verma",
            amount: "₹299",
            status: "Pending",
        },
        {
            id: "#ORD004",
            customer: "Neha Gupta",
            amount: "₹999",
            status: "Delivered",
        },
    ];

    return (
        <div className="order-management">
            <h1>Order Management</h1>

            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.amount}</td>
                            <td>
                                <span
                                    className={`status ${order.status.toLowerCase()}`}
                                >
                                    {order.status}
                                </span>
                            </td>
                            <td>
                                <button className="view-btn">
                                    View
                                </button>

                                <button className="update-btn">
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderManagement;