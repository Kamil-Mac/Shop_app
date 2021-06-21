import React, { useRef, useState } from 'react';

import classes from './Cart.module.css';

const isEmpty = (value) => value.trim() === '';
const isNotFiveChars = (value) => value.trim().length !== 5 ;

const Checkout = (props) => {

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = !isNotFiveChars(enteredPostal);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postal: enteredPostalIsValid
        });

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;

        if (!formIsValid) {
            return;
        }

        props.onSubmit({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostal
        });
    };

    const nameControl = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
    const streetControl = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
    const postalControl = `${classes.control} ${formInputsValidity.postal ? '' : classes.invalid}`;
    const cityControl = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;

    return (
        <form onSubmit={confirmHandler}>
            <div className={nameControl}>
                <label htmlFor="name">Your name</label>
                <input type='text' id='name' ref={nameInputRef}></input>
                {!formInputsValidity.name && <p>Please enter a valid name ;)</p>}
            </div>
            <div className={streetControl}>
                <label htmlFor="name">Street</label>
                <input type='text' id='street' ref={streetInputRef}></input>
                {!formInputsValidity.street && <p>Please enter a valid street ;)</p>}
            </div>
            <div className={postalControl}>
                <label htmlFor="name">Postal Code</label>
                <input type='text' id='posatl' ref={postalInputRef}></input>
                {!formInputsValidity.postal && <p>Please enter 5 characters ;)</p>}
            </div>
            <div className={cityControl}>
                <label htmlFor="name">City</label>
                <input type='text' id='city' ref={cityInputRef}></input>
                {!formInputsValidity.city && <p>Please enter a valid city ;)</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;