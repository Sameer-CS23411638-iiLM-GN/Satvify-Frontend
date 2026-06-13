import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { cartItems } = useCart();

    return (
        <nav className="navbar">
            <div className="logo">SATVIFY</div>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/menu">Menu</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>

                <li>
                    <Link to="/subscriptions">Plans</Link>
                </li>

                <li>
                    <Link to="/admin">Admin</Link>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>

                <li>
                    <Link to="/cart" className="cart-btn">
                        Cart ({cartItems.length})
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;