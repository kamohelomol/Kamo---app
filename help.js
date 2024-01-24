import React from "react";
import '.././App.css';


const websiteDetails = {

    Name: 'ReaVaya ReaSite',
    Description: 'A website that enables reavaya users to be able to get daily updates and filling bus tags. ',
    Contact: 'reavaya.co.za',
    Phone: '',
};


const Help = () => {
    
    return(

        <div className="help-container">
            <h2> Help and Support </h2>
            <p> {websiteDetails.Description}</p>

            <div className="contact-details">
                <h3> Contact Information: </h3>
                <p> Email: {websiteDetails.Contact}</p>
                <p> Phone: {websiteDetails.Phone}</p>
            </div>

        </div>
    );
};

export default Help;