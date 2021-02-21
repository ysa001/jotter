import React, { Component } from 'react';

import ContactData from './ContactData/ContactData';
import imgSrc from '../../assets/images/contactform.png';
import classes from './Contact.module.css';

class Contact extends Component {
    render () {
        return (
            <section className={classes.Contact}>
                <ContactData />
                <div className={classes.ImageContainer}> 
                    <img src={imgSrc} alt=""/>
                </div>
            </section>
        );
    }
}

export default Contact;