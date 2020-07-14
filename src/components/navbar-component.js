import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./css/navbar-component.css";

export default class Navbar extends Component {
    render(){
        return(
            <nav className = "navbar navbar-expand-lg fixed-top">
                <Link to = '/' className = 'navbar-brand'>Eternal Aroma</Link>
            </nav>
        );
    }
}