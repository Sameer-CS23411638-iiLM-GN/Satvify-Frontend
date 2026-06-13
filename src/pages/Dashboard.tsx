import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard">
            <aside className="sidebar">
                <h2>SATVIFY</h2>

                <ul>
                    <li>Dashboard</li>
                    <li>My Orders</li>
                    <li>Subscriptions</li>
                    <li>Rewards</li>
                    <li>Profile</li>
                    <li>Logout</li>
                </ul>
            </aside>

            <main className="dashboard-content">
                <h1>Welcome Back 👋</h1>

                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>Orders</h3>
                        <p>12</p>
                    </div>

                    <div className="stat-card">
                        <h3>Subscriptions</h3>
                        <p>2 Active</p>
                    </div>

                    <div className="stat-card">
                        <h3>Reward Points</h3>
                        <p>450</p>
                    </div>
                </div>

                <div className="recent-orders">
                    <h2>Recent Orders</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Status</th>
                                <th>Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Greek Salad</td>
                                <td>Delivered</td>
                                <td>₹199</td>
                            </tr>

                            <tr>
                                <td>Protein Smoothie</td>
                                <td>On The Way</td>
                                <td>₹199</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;