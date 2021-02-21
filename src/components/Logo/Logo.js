import React from 'react';

import logoSrc from '../../assets/images/jotter-logo.png';
import classes from './Logo.module.css';

const logo = props => (
    <div className={classes.Logo}>
        <img src={logoSrc} alt=""/>
    </div>
);

export default logo;

