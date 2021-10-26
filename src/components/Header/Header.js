import {useContext} from "react";
import {Wrapper, Content} from "./Header-styles";
import {Link} from "react-router-dom";
import CartContext from "../../store/cart-context";


const Header = (props) => {
    const cartCtx = useContext(CartContext);
    const numOfItems = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.qty
    }, 0)

    return(
        <Wrapper>
            <Content>
                <Link to="/" style={{textDecoration: "none"}}>
                    <h1>Winona Lapine</h1>
                </Link>
                <button className="cart" onClick={props.onShowCart}>
                    <span>
                        <i className="fa fa-shopping-bag"></i>
                    </span>
                    <span>{numOfItems}</span>
                </button>
            </Content>
        </Wrapper>
    )
}

export default Header;