import {Link} from "react-router-dom";

const Index = (props) => {
    const loaded = () => {
        return props.products.map((product) => (
            <div key={product._id}>
                <Link to={`/products/${product._id}`}><h1>{product.name}</h1></Link>
                <img src={product.image} alt={product.name}/>
                <h3>$ {product.price}</h3>
            </div>
        ))
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return props.products ? loaded() : loading();
};

export default Index;