import {useContext} from "react";
import Modal from "./Modal";
import {Wrapper} from "./Cart-styles";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const handleRemoveItem = id => {

    };

    const handleAddItem = item => {};

    const cartItems = cartCtx.items.map((item) => (<li key={item.id}>
        <h2>{item.name}</h2>
        <div>
            <span>${item.price.toFixed(2)}</span>
            <span>QTY: {item.qty}</span>
        </div>
        
        {/* <div>
            <button onClick={handleRemoveItem}>-</button>
            <button onClick={handleAddItem}>+</button>
        </div> */}
        </li>
   ))
    return(
        <Modal onClose={props.onClose}>
            <Wrapper>
                <button className='close' onClick={props.onClose}><i className="fa fa-window-close"></i>Close</button>
                <ul>
                {cartItems}
                </ul>
                <div className="checkoutItems">
                <h3>Total Amount: ${cartCtx.totalAmount.toFixed(2)}</h3>
                <button className="checkout">checkout</button>
                </div>
            </Wrapper>
        </Modal>
    )
};

export default Cart;