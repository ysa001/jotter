import React from 'react';

import classes from './Card.module.css';

const card = props => (
    <div className={classes.Card}>
        <div className={classes.imgContainer}>
            <img src={props.imageSrc} alt={props.children}/>
        </div>
        <p> {props.children} </p>
    </div>
);

export default card;