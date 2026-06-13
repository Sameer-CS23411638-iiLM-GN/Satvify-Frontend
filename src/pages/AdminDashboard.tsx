import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
    const stats = [
        {
            title: "Total Orders",
            value: "1248",
        },
        {
            title: "Revenue",
            value: "₹2.8L",
        },
        {
            title: "Customers",
            value: "876",
        },
        {
            title: "Subscriptions",
            value: "342",
        },
    ];

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>

            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div className="stat-card" key={index}>
                        <h3>{stat.title}</h3>
                        <h2>{stat.value}</h2>
                    </div>
                ))}
            </div>

            <div className="admin-sections">
                <div className="admin-card">
                    <h2>Product Management</h2>

                    <Link to="/admin/products">
                        <button>Manage Products</button>
                    </Link>
                </div>

                <div className="admin-card">
                    <h2>Order Management</h2>

                    <Link to="/admin/orders">
                        <button>View Orders</button>
                    </Link>
                </div>

                <div className="admin-card">
                    <h2>Customer Management</h2>

                    <Link to="/admin/customers">
                        <button>View Customers</button>
                    </Link>
                </div>

                <div className="admin-card">
                    <h2>Analytics</h2>

                    <Link to="/admin/analytics">
                        <button>View Analytics</button>
                    </Link>
                </div>

                <div className="admin-card">
                    <h2>Subscription Management</h2>

                    <button>View Plans</button>
                    <button>Edit Plans</button>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;