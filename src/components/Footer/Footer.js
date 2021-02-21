import React from 'react';
import classes from './Footer.module.css';

import icon1 from '../../assets/images/footer1.png';
import icon2 from '../../assets/images/footer2.png';
import icon3 from '../../assets/images/footer3.png';

const footer = () => (
    <footer className={classes.Footer}>
        <div className={classes.darkshade}>
            <div className={classes.list}>
                <div className={classes.icon}> <img src={icon1}/> </div>
                <p> Metro Manila, Philippines </p>
            </div>

            <div className={classes.list}>
                <div className={classes.icon}> <img src={icon2}/> </div>
                <p> +1 555 12345 </p>
            </div>

            <div className={classes.list}>
                <div className={classes.icon}> <img src={icon3}/> </div>
                <p> support@jotter.com </p>
            </div>
        </div>

        <div className={classes.lightshade}>
            <h4> About </h4>
            <br />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam dapibus porttitor sodales. Etiam ullamcorper tempus 
                augue ut faucibus. Praesent pharetra convallis molestie. 
                Mauris sodales aliquam ligula, non euismod augue eleifend 
                non. Suspendisse potenti. Duis ornare. </p>
        </div>
    </footer>
);

export default footer;