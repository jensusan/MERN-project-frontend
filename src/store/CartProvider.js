import {useReducer} from "react";
import {useContext} from 'react';
import CartContext from "./cart-context";

const initialCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === "ADD") {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.qty
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return initialCartState;
}

const CartProvider = (props) => {
    const [cartState, cartAction] = useReducer(cartReducer, initialCartState)
    
    const handleAddItem = (item) => {
        cartAction({
            type: "ADD", item: item
        })
    };

    const handleRemoveItem = (id) => {
        cartAction({
            type: "REMOVE", id: id
        })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: handleAddItem,
        removeItem: handleRemoveItem
    }
    return (
        <CartContext.Provider value={cartContext}>
        {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;