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
                    <div className = "row align-items justify-content-center align-items-center">
                        <div className = "col-12 col-sm-4">
                            <h2>Sample Logo</h2>
                        </div>
                        <div className = "col-auto">
                            <h4>Sample text to promote product/company</h4><br />
                            <div className = "row align-items-center justify-content-center">
                                <div className = "col-auto">
                                    <Button className = "button" onClick = { this.onClick }>Check Out Our Product!</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </Jumbotron>    
        );    
    }        
}