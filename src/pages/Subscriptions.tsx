import "./Subscriptions.css";

function Subscriptions() {
    return (
        <div className="subscriptions-page">
            <h1>My Subscriptions</h1>

            <div className="subscription-card">
                <h3>Monthly Plan</h3>
                <p>Status: Active</p>
                <p>Price: ₹3499</p>
                <button>Manage Plan</button>
            </div>

            <div className="subscription-card">
                <h3>Premium Plan</h3>
                <p>Status: Expired</p>
                <p>Price: ₹5999</p>
                <button>Renew Plan</button>
            </div>
        </div>
    );
}

export default Subscriptions;