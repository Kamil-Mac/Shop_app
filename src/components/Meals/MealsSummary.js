import React from 'react';

import classes from './MealsSummary.module.css';

const MealsSummary = () => {

    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non erat eget eros facilisis fringilla id sit amet mi. Donec fermentum quis quam ut hendrerit. Cras vel diam quam. 
            </p>
            <p>
                Nulla at quam vitae lacus interdum egestas. Nunc pellentesque vel orci sit amet condimentum. Mauris luctus, massa commodo elementum condimentum, nisl dolor tincidunt nunc, quis pharetra diam velit sed tortor.
            </p>
        </section>
    );
};

export default MealsSummary;