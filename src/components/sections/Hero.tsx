import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    Healthy Food,
                    <span> Delivered Fresh</span>
                </h1>

                <p>
                    Discover delicious vegan and satvik meals, smoothie bowls,
                    salads, and subscription plans designed for a healthier lifestyle.
                </p>

                <div className="hero-buttons">
                    <button className="primary-btn">Order Now</button>
                    <button className="secondary-btn">View Plans</button>
                </div>
            </div>

            <div className="hero-image">
                <img
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800"
                    alt="Healthy Food Bowl"
                />
            </div>
        </section>
    );
}

export default Hero;