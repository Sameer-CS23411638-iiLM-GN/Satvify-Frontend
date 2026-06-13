import { plans } from "../../data/plans";
import "./Plans.css";

function Plans() {
    return (
        <section className="plans-section">
            <h2>Subscription Plans</h2>
            <p className="plans-subtitle">
                Choose a healthy lifestyle with our flexible meal subscriptions.
            </p>

            <div className="plans-grid">
                {plans.map((plan) => (
                    <div className="plan-card" key={plan.id}>
                        <h3>{plan.title}</h3>
                        <h1>{plan.price}</h1>
                        <p>{plan.description}</p>

                        <button className="subscribe-btn">
                            Subscribe Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Plans;