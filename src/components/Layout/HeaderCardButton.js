import React, { useContext, useEffect, useState } from 'react';
import CardIcon from '../Cart/CardIcon';
import classes from './HeaderCardButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCardButton = (props) => {
    const [btnIsHighLighted, setbtnIsHighLighted] = useState(false);

    const cartctx = useContext(CartContext);

    const numberOfCartItems = cartctx.items.reduce((curNumber, item) => {
        return curNumber + item.amount; 
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;

    useEffect(() => {
        if (cartctx.items.length === 0) {
            return;
        }
        setbtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setbtnIsHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    },[cartctx.items])

    return (
        <button onClick={props.onClick} className={btnClasses}>
            <span className={classes.icon}>
                <CardIcon />
            </span>
            <span>Your Card</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCardButton;