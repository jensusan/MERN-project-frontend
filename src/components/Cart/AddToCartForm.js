import {Button} from './AddToCart-styles';
const AddToCartForm = (props) => {
    return (
        <form>
            <label htmlFor='quantity'>Quantity: </label>
            <input label='quantity' input={{   id: 'quantity',
                type: 'number',
                min: "1",
                step: '1',
                defaultValue: '1'}}/>
            <Button>ADD TO CART</Button>
        </form>
    )
};

export default AddToCartForm;