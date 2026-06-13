import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import OrderHistory from "../pages/OrderHistory";
import OrderTracking from "../pages/OrderTracking";
import Subscriptions from "../pages/Subscriptions";
import ReferralRewards from "../pages/ReferralRewards";

import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

import AdminDashboard from "../pages/AdminDashboard";
import ProductManagement from "../pages/admin/ProductManagement";
import OrderManagement from "../pages/admin/OrderManagement";
import CustomerManagement from "../pages/admin/CustomerManagement";
import Analytics from "../pages/admin/Analytics";

function AppRoutes() {
    return (
        <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* User Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/track-order" element={<OrderTracking />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/rewards" element={<ReferralRewards />} />

            {/* Cart & Checkout */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* Admin Panel */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route
                path="/admin/products"
                element={<ProductManagement />}
            />
            <Route
                path="/admin/orders"
                element={<OrderManagement />}
            />
            <Route
                path="/admin/customers"
                element={<CustomerManagement />}
            />
            <Route
                path="/admin/analytics"
                element={<Analytics />}
            />
        </Routes>
    );
}

export default AppRoutes;