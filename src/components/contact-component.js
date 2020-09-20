import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './css/contact-component.css';

class Contact extends Component {
    constructor(props){
        super(props);
    }

    render(){
        
        const style = {
            width: '300px',
            height: '300px'
        }

        return(
            <Map google = { this.props.google } style = { style } initialCenter = {{
                lat: 20.421553,
                lng: 72.840964
            }}>
                <Marker />
            </Map>    

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDEHY5ssP4ZQ0uSpvhCcTPxTZsoPDDQwFk')
   })(Contact);