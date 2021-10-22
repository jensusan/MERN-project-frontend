import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "../pages/Index/Index";
import Show from "../pages/Show/Show";

const Main = (props) => {
    const [products, setProducts] = useState(null);
    const URL = "https://project-3-shop.herokuapp.com/products/";

    const getProducts = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => getProducts(), []);

    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Index products={products}/>
                </Route>
                <Route path="/products/:id" render={(rp) => (
                    <Show products={products} URL={URL}
                    {...rp} />
                )}/>
            </Switch>
        </div>
    )
};

export default Main;