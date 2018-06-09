import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <h1>Home Page</h1>

                <Link to="/contact">Contact</Link>
            </div>
        );
    }
}