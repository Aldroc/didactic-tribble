import React, { Component } from 'react';
import './css/product-component.css';
import { PRODUCTSARRAY } from '../assets/products';
import DisplayProduct from './product_display-component';

export default class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            productarr: PRODUCTSARRAY
        }
    }

    render(){
        return(
            <div className = "container">
                <div className = "row justify-content-center align-items-center">
                    <div className = "col-auto">
                        <h2 className = "heading">Our Products</h2>
                    </div>
                </div>
                <div className = "row justify-content-around align-items-center">    
                    {this.state.productarr.map((e) => (
                        <div key = { e.id } className = "col-auto">
                            <DisplayProduct src = { e.src } src2 = {  e.src2 } alt = { e.alt } />
                        </div>    
                    ))}
                </div>
            </div>
        );
    }
}