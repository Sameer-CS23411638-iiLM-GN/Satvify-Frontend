import { testimonials } from "../../data/testimonials";
import "./Testimonials.css";

function Testimonials() {
    return (
        <section className="testimonials">
            <h2>What Our Customers Say</h2>

            <div className="testimonial-grid">
                {testimonials.map((item) => (
                    <div className="testimonial-card" key={item.id}>
                        <p>"{item.review}"</p>
                        <h4>{item.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;