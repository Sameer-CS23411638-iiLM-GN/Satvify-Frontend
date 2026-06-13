import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useCart();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h1>Product Not Found</h1>;
    }

    return (
        <div className="product-details">
            <div className="product-image">
                <img
                    src={product.image}
                    alt={product.title}
                />
            </div>

            <div className="product-info">
                <h1>{product.title}</h1>

                <h2>{product.price}</h2>

                <p>
                    Freshly prepared healthy meal packed with
                    nutrients and wellness benefits.
                </p>

                <div className="nutrition-box">
                    <h3>Nutritional Highlights</h3>

                    <ul>
                        <li>Calories: 250 kcal</li>
                        <li>Protein: 18g</li>
                        <li>Carbohydrates: 22g</li>
                        <li>Fats: 8g</li>
                    </ul>
                </div>

                <div className="ingredients-box">
                    <h3>Ingredients</h3>

                    <p>
                        Fresh vegetables, fruits, seeds, herbs,
                        healthy dressing and premium ingredients.
                    </p>
                </div>

                <button
                    className="add-cart-btn"
                    onClick={() => addToCart(product)}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default ProductDetails;