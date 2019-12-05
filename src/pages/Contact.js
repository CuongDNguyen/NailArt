import React from 'react';
import NailMenu from '../components/NailMenu';
import "../styles/Contact.css";

const Contact = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div id="title" className="offset-md-3 col-md-6">
                        Nail Art
                    </div>
                </div>
                <div className="row">
                    <div id="address" className="offset-md-3 col-md-6">
                        Address: <a id="addressMaps" href="https://goo.gl/maps/2sozc7TRuQD4W3sr7"> 5903 South Blvd Charlotte, NC 28217</a>
                    </div>
                </div>
                <div className="row">
                    <div id="phone" className="offset-md-3 col-md-6">
                        Phone: <a id="phoneNumber" href="tel:7046433124">(704) 643-3124</a>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-3 col-md-9">
                        <h3 id="hours">Open Hours</h3>
                        <ul class="operationHours">
                            <li>Monday to Saturday: 10am to 8pm</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div id="walkIn">
                        Walk-in Welcomes and Appointments Accepted
                    </div>
                </div>
                <div className="row">
                        <NailMenu />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;