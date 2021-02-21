import React from 'react';

import Layout from '../../hoc/Layout/Layout';
import Showcase from '../Home/Showcase/Showcase';
import Features from '../Home/Features/Features';
import Contact from '../../containers/Contact/Contact';
import Footer from '../Footer/Footer';
import classes from './Home.module.css';

const home = props => (
    <Layout className={classes.Home}>
        <Showcase id="#home"/>
        <Features />
        <Contact />
        <Footer />
    </Layout>
);

export default home;