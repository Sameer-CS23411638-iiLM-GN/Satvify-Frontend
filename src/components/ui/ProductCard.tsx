import "./ProductCard.css";
import { useCart } from "../../context/CartContext";

type ProductCardProps = {
    id: number;
    image: string;
    title: string;
    price: string;
};

function ProductCard({
    id,
    image,
    title,
    price,
}: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id,
            image,
            title,
            price,
        });
    };

    return (
        <div className="product-card">
            <img src={image} alt={title} />

            <div className="product-info">
                <span className="rating">⭐ 4.8</span>

                <h3>{title}</h3>

                <p className="price">{price}</p>

                <button onClick={handleAddToCart}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;