import React from 'react';

import tableImg from '../assets/test2.png';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

const Header = ({ onShowCart }) => {

    return (
        <React.Fragment>

            <header className={classes.header}>
                <h1>Lorem Ipsum Meals</h1>
                <HeaderCardButton onClick={onShowCart}>Cart</HeaderCardButton>
            </header>
            <div className={classes['main-image']}>
                <img src={tableImg} alt="A table full of delicious food ;)"/>
            </div>

        </React.Fragment>
    );
};

export default Header;