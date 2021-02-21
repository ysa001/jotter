import React, { Component } from 'react';
import classes from './ContactData.module.css';

class ContactData extends Component {

    formSubmissionHandler = (event) => {
        event.preventDefault();
    }

    render () {
        return(
            <form className={classes.ContactData} onSubmit={this.formSubmissionHandler}>
                <h2> Send us a message </h2>
                <p> Our team is happy to answer all your inquiries. </p>
                <br />
                <fieldset>
                    <label for="name"> Name </label>
                    <input type="text" name="name"/>

                    <label for="email"> Email </label>
                    <input type="email" name="email"/>

                    <label for="message"> Message </label>
                    <textarea name="message"></textarea>

                    <button type="submit"> Submit </button>
                </fieldset>
            </form>
        );
    }
}

export default ContactData;