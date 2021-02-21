import React from 'react';

import classes from './Features.module.css';
import Card from '../../UI/Card/Card';
import img1 from '../../../assets/images/card1.png';
import img2 from '../../../assets/images/card2.png';
import img3 from '../../../assets/images/card3.png';


const features = () => (
    <section className={classes.Features}>
        <Card imageSrc={img1} > Quick and Easy to Use </Card>
        <Card imageSrc={img2} > Create, Edit and Save your notes for free </Card>
        <Card imageSrc={img3} > Realiable and Easy to Use </Card>
    </section>
);

export default features;