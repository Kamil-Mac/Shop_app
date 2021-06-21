import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {

    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        //console.log(item.amount);
        cartCtx.addItem(item);
    };

    const orderMenu = () => {
        setIsCheckout(true);
    };
//firebase 
    const submitOrderHandler = (userData) => {
        fetch('https://foodshop-b2e5b-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items,
            })
        });
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) =>
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />)}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
            {   hasItems && <button className={classes.button} onClick={orderMenu}>Order</button>}
        </div>);

    return (
        <Modal onHideCart={props.onHideCart}>

            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onHideCart} onSubmit={submitOrderHandler}/>}
            {!isCheckout && modalActions}

        </Modal>
    );
};

export default Cart;