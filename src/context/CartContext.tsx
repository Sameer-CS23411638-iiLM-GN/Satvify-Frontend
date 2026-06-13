import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Product = {
    id: number;
    title: string;
    price: string;
    image: string;
};

type CartContextType = {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCartItems((prev) => [...prev, product]);
    };

    const removeFromCart = (id: number) => {
        setCartItems((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }

    return context;
};