import "./Categories.css";

function Categories() {
    const categories = [
        {
            title: "Fresh Salads",
            description: "Nutritious and delicious salads made fresh daily.",
            emoji: "🥗",
        },
        {
            title: "Smoothie Bowls",
            description: "Healthy bowls packed with fruits and nutrients.",
            emoji: "🥣",
        },
        {
            title: "Healthy Beverages",
            description: "Refreshing drinks to energize your day.",
            emoji: "🥤",
        },
        {
            title: "Meal Plans",
            description: "Weekly and monthly wellness subscriptions.",
            emoji: "📦",
        },
    ];

    return (
        <section className="categories">
            <div className="categories-header">
                <h2>Explore Our Categories</h2>
                <p>Healthy food options crafted for your wellness journey.</p>
            </div>

            <div className="categories-grid">
                {categories.map((item, index) => (
                    <div className="category-card" key={index}>
                        <div className="category-icon">{item.emoji}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;