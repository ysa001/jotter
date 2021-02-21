import React from 'react';

import Layout from '../../hoc/Layout/Layout';
import Showcase from '../Home/Showcase/Showcase';
import Features from '../Home/Features/Features';
import classes from './Home.module.css';

const home = props => (
    <Layout className={classes.Home}>
        <Showcase id="#home"/>
        <Features />
        
        <div>Section C: Contact</div>
        <div>Section D: Footer</div>
    </Layout>
);

export default home;