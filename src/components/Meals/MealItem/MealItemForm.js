import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const inputAmountRaw = amountInputRef.current.value;
        const inputAmount = +inputAmountRaw;
        
        if(inputAmountRaw.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10) {
            setIsAmountValid(false);

            return;
        }

        props.onAddToCart(+inputAmount); 
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="Amount" input={{
                id:props.id,
                type:'number',
                min:'1',
                step:'1',
                defaultValue:'1'
            }} />
            <button>Add</button>
            {!isAmountValid && <p>Please, enter the amount from 1 to 10</p>}
        </form>
    );
};

export default MealItemForm;