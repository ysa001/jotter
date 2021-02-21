import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem> HOME </NavigationItem>
        <NavigationItem> FEATURES </NavigationItem>
        <NavigationItem> CONTACT </NavigationItem>
        <NavigationItem> SIGN IN </NavigationItem>
    </ul>
);

export default navigationItems;