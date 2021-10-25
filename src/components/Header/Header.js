import {Wrapper, Content} from "./Header-styles";
import {Link} from "react-router-dom";


const Header = (props) => {
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
                    <span>3</span>
                </button>
            </Content>
        </Wrapper>
    )
}

export default Header;