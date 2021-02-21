import React from 'react';

import Logo from '../../Logo/Logo';
import DrawerToggle from '../../Sidedrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const toolbar = props => {
    //not authenticated, home
    return(
        <header className={classes.Toolbar}>
            <Logo className={classes.item}/>
            <DrawerToggle className={classes.item}/>
            <NavigationItems />
        </header>
    );
}

export default toolbar;