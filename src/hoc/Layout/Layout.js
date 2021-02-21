import React from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = props => {
    return (
        <Aux className={classes.Layout}>
            <Toolbar className={classes.Toolbar}/>
            <main className={classes.main}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;