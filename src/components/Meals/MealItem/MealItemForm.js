import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

    const amountInputRef = useRef();
    const [valid, setValid] = useState(true);
    
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNr = +enteredAmount;

        if (enteredAmount.trim().lenght === 0 || enteredAmountNr < 1 || enteredAmountNr > 5) {
            setValid(false);
            return;
        }
        
        props.onAddToCart(enteredAmountNr);

    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>

            <Input 
                ref={amountInputRef}
                label="Amount" 
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }} 
            />
            <button>+ Add</button>
            {!valid && <p>Please enter a valid amount (1-5).</p>}   
        </form>
    );
};

export default MealItemForm;