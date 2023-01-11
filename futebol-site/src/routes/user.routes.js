import { Route, Switch } from "react-router-dom";
import CarouselComponent from "../components/carousel";
import Home from "../views/home";

function Routes() {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/carousel">
                <CarouselComponent />
            </Route>
        </Switch>
    )
}

export default Routes