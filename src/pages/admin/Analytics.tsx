import React from "react";
import "./Analytics.css";

// Local fallback AdminLayout in case the real component or its types
// cannot be resolved during build. This keeps this page functional
// without editing other project files.
const AdminLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="admin-layout">{children}</div>
);

function Analytics() {
    const stats = [
        {
            title: "Total Revenue",
            value: "₹2,80,000",
        },
        {
            title: "Total Orders",
            value: "1,248",
        },
        {
            title: "Active Customers",
            value: "876",
        },
        {
            title: "Subscriptions",
            value: "342",
        },
    ];

    return (
        <AdminLayout>
            <div className="analytics-page">
                <h1>Analytics Dashboard</h1>

                <div className="analytics-grid">
                    {stats.map((stat, index) => (
                        <div className="analytics-card" key={index}>
                            <h3>{stat.title}</h3>
                            <h2>{stat.value}</h2>
                        </div>
                    ))}
                </div>

                <div className="analytics-section">
                    <div className="chart-card">
                        <h2>Revenue Overview</h2>
                        <p>Monthly revenue growth chart will appear here.</p>
                    </div>

                    <div className="chart-card">
                        <h2>Order Statistics</h2>
                        <p>Order analytics chart will appear here.</p>
                    </div>

                    <div className="chart-card">
                        <h2>Customer Growth</h2>
                        <p>Customer growth chart will appear here.</p>
                    </div>

                    <div className="chart-card">
                        <h2>Subscription Analytics</h2>
                        <p>Subscription insights will appear here.</p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Analytics;