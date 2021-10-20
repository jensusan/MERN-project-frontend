import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show/Show";
const Main = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Index/>
                </Route>
                <Route path="/products/:id" render={(rp) => (
                    <Show {...rp} />
                )}/>
            </Switch>
        </div>
    )
};

export default Main;