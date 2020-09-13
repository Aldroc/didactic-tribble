import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './css/jumbotron-component.css';

export default class Jumbo extends Component {
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log('onClick Event Generated')
    }

    render(){
        return(
            <Jumbotron className = "header">
                <div className = "container">
                    <div className = "row justify-content-around align-items-center">
                        <div className = "col-auto">
                            <img src = "images/Final.png" alt = "Eternal Aroma Logo" height = "200px" width = "160px" />
                        </div>
                        <div className = "col-auto">
                            <h1 className = "tagline">Enchanting Fragrance</h1><br />
                            <div className = "row align-items-center justify-content-center">
                                <div className = "col-auto">
                                    <Button className = "button" onClick = { this.onClick }>Lorem Ipsum</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </Jumbotron>    
        );    
    }        
}