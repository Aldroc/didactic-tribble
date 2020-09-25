import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Form, Button, Input, FormGroup, Label, Col } from 'reactstrap';
import './css/contact-component.css';

class Contact extends Component {
    constructor(props){
        super(props);
    }

    render(){
        
        const style = {
            width: '450px',
            height: '400px'
        }

        return(
            <div className = "container">
                <div className = "row justify-content-center align-items-center mb-3">
                    <div className = "col-auto">
                        <h2 className = "contact_head">Contact Us</h2>
                    </div>
                </div>
                <div className = "row mb-5">
                    <div className = "col-12 col-sm-5 offset-sm-1">
                        <Form className = "form">
                            <FormGroup>
                                <Label for = "name">Name*</Label>
                                <Input id = "name" type = "text" name = "name" placeholder = "Enter Your Name" required />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for = "email">E-Mail*</Label>
                                <Input id = "email" type = "email" name = "email" placeholder = "Enter Your Email" required />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for = "phone">Phone No</Label>
                                <Input id = "phone" type = "tel" name = "phone" placeholder = "Enter Your Phone No."/>
                            </FormGroup>

                            <FormGroup>
                                <Label for = "message">Your Message*</Label>
                                <Input id = "message" type = "textarea" name = "message" placeholder = "Type your message here..." />
                            </FormGroup>

                            <Col sm = {{size: 7, offset: 2}}>
                                <Button className = "btn-block">Submit</Button>
                            </Col>
                        </Form>
                    </div>
                    <div className = "d-none d-sm-block col-auto">
                        <Map google = { this.props.google } style = { style } initialCenter = {{
                        lat: 20.421553,
                        lng: 72.840964
                        }}>
                        <Marker />
                        </Map>
                    </div>
                </div>
                <div className = "row justify-content-center align-items-center p-0">
                    <p className = "col-auto contact_para">For general information or enquiries, please contact us at:</p>
                </div>
                <div className = "row justify-content-center align-items-center p-0">
                    <p className = "col-auto contact_para"><b>Email:</b> johndoe@gmail.com</p>
                </div>
                <div className = "row justify-content-center align-items-center p-0">
                    <p className = "col-auto contact_para"><b>Phone:</b> 1234567890</p>
                </div>
            </div>    
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyDEHY5ssP4ZQ0uSpvhCcTPxTZsoPDDQwFk')
   })(Contact);