import "./Features.css";

function Features() {
    const features = [
        {
            icon: "🥬",
            title: "Fresh Ingredients",
            desc: "Sourced daily for maximum nutrition and taste.",
        },
        {
            icon: "🚚",
            title: "Daily Delivery",
            desc: "Fast and reliable delivery to your doorstep.",
        },
        {
            icon: "💪",
            title: "Nutrition Focused",
            desc: "Balanced meals designed by wellness experts.",
        },
        {
            icon: "🌱",
            title: "Vegan & Satvik",
            desc: "Clean eating with plant-based ingredients.",
        },
        {
            icon: "💰",
            title: "Affordable Plans",
            desc: "Healthy eating that fits your budget.",
        },
        {
            icon: "♻️",
            title: "Eco-Friendly",
            desc: "Sustainable packaging for a greener future.",
        },
    ];

    return (
        <section className="features">
            <div className="features-header">
                <h2>Why Choose Satvify?</h2>
                <p>Your wellness journey starts with better food choices.</p>
            </div>

            <div className="features-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;