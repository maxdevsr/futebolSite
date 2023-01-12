import { Route, Switch } from "react-router-dom";
import CarouselComponent from "../components/carousel";
import Home from "../views/home";
import StaticExample from "../components/login/login";

function Routes() {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/carousel">
                <CarouselComponent />
            </Route>
            <Route exact path="/login">
                <StaticExample />
            </Route>
        </Switch>
    )
}

export default Routes