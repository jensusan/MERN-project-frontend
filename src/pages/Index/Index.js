import {Link} from "react-router-dom";
import {Wrapper, Container} from "./Index-styles";

const Index = (props) => {
    const loaded = () => {
        return ( 
        <Wrapper>
            {props.products.map((product) => (<Container key={product._id}>
                <Link to={`/products/${product._id}`} style={{ textDecoration: 'none'}}>
                    <img src={product.image} alt={product.name}/>
                    <h1>{product.name}</h1>
                </Link>
                <h2>${product.price}</h2>
            </Container>
            ))}
        </Wrapper>)
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return props.products ? loaded() : loading();
};

export default Index;