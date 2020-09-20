import React, { Component } from 'react';
import './css/about-component.css';

export default class About extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "container">
                <div className = "row justify-content-center align-items-center mb-3">
                    <div className = "col-auto">
                        <h2 className = "about_head">About Our Brand</h2>
                    </div>
                </div>
                <div className = "row justify-content-center align-items-center">
                    <div className = "col-12 col-sm-10">
                        <p className = "aboutus">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque massa sapien, ac scelerisque lacus condimentum eget. Morbi vulputate bibendum nibh, vel maximus enim faucibus eu. Pellentesque ante arcu, ultricies quis dolor auctor, consequat rhoncus nunc. Aliquam iaculis efficitur mauris eget vulputate. Proin ultrices, turpis eget pellentesque efficitur, diam dui pellentesque tellus, vel varius felis sapien sit amet enim. Duis ac semper tortor. Sed sit amet augue ut ligula pellentesque fringilla a ut arcu. Nullam quis ligula a quam commodo tristique. Nunc laoreet purus tincidunt euismod iaculis. Aliquam vitae dui a leo sollicitudin pharetra.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}