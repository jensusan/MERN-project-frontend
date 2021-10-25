import Modal from "./Modal";
import {Wrapper} from "./Cart-styles";

const Cart = (props) => {
    const cartItems = <ul>{[{id: 4, name: "west pink leather", price: 199.95}].map((item) => (<li>{item.name}</li>))}</ul>
    return(
        <Modal onClose={props.onClose}>
            <Wrapper>
                <button className='close' onClick={props.onClose}><i className="fa fa-window-close"></i>Close</button>
            {cartItems}
                <div>
                    <span>Total Amount: </span>
                    <span>$35.62</span>
                </div>
                <button className="checkout">checkout</button>
            </Wrapper>
        </Modal>
    )
};

export default Cart;