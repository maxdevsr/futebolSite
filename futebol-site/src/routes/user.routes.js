import { Route, Switch } from "react-router-dom";
import Home from "../views/home";

function Routes() {

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes