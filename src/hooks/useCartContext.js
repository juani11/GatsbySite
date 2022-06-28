import { useContext } from "react";
import { CartContext } from "../context/cart/cart.context";


export const useCartContext = () => {
    const cartContext = useContext(CartContext)
    return cartContext
}
