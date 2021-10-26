import {useState} from "react";
import {Button, Content} from './AddToCart-styles';
const AddToCartForm = (props) => {
    const [enteredQty, setEnteredQty] = useState(0);
    const [cartMessage, setCartMessage] = useState('');
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredQtyNum = +enteredQty;
        console.log(enteredQtyNum)
        if(enteredQtyNum === 0) {
            setCartMessage("Please enter a quantity more than 0")
            return;
        }
        props.onAddToCart(enteredQtyNum)
        setCartMessage("Added to cart!")
    }
    const handleChange = (event) => {
        setEnteredQty(event.target.value)
    }
    return (
        <Content>
        <form onSubmit={handleSubmit}>
            <label htmlFor='quantity'>Quantity: </label>
            <input 
                onChange={handleChange}
                label='quantity' 
                value= {enteredQty}
                input={{   id: 'quantity',
                type: 'number',
                min: "1",
                step: '1',
                defaultValue: '1'}}/>
            <Button>ADD TO CART</Button>
            <p>{cartMessage}</p>
        </form>
        </Content>
    )
};

export default AddToCartForm;