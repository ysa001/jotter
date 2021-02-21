import React from 'react';

import GirlLaptop from '../../../assets/images/Girl-Laptop.png';
import classes from './Showcase.module.css';

const showcase = () => (
    <section className={classes.Showcase}>
        <img src={GirlLaptop} />
        <div className={classes.tagline}>
            <h1> Organize your work </h1>
            <h1> and your ideas with Jotter </h1>

            <div className={classes.buttonContainer}>
                <div className={classes.buttonShadow}></div>
                <button> Get Started </button>

            </div>
        </div>
    </section>
);

export default showcase;