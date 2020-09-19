import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import List from '../Component/Home/List';
import Details from '../Component/Home/Details'


class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={List} />
                <Route exact path="/details/:id/" component={Details} />
                <Redirect to='/'></Redirect>
            </Switch>
        )
    }
}


export default Routes;