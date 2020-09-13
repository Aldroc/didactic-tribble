import React, { Component } from 'react';

export default class DisplayProduct extends Component{
    constructor(props){
        super(props);

        this.state = {
            src: this.props.src
        }
    }

    render(){
        return(
            <img src = { this.state.src } alt = { this.props.alt } height = "250px" width = "250px"
             onMouseOver = {() => {
                 this.setState({
                     src: this.props.src2
                 })
             }}
             onMouseOut = {() => {
                 this.setState({
                     src: this.props.src
                 })
             }}
             />
        );
    }
}