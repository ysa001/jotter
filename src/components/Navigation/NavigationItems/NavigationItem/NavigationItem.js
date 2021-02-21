import React from 'react';
// import { NavLink } from 'react-router-dom'

import classes from './NavigationItem.module.css';

const navigationItem = props => (
    <li className={classes.NavigationItem}> 
        <a href="#"> {props.children} </a>
    </li>
);

export default navigationItem;