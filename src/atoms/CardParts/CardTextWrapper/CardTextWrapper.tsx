import React from 'react';
import classnames from 'classnames';
import styles from './CardTextWrapper.module.scss';
import CardFooter from '../CardFooter';

type CardTextWrapper = {
    text: string;
    price: string;
};

const CardTextWrapper = ({ text, price }: CardTextWrapper) => {
    return (
        <div className={classnames('col', styles.textWrapper)}>
            <div>
                <p className={styles.text}>{text}</p>
                <h5 className={styles.price}>{price}</h5>
            </div>

            <CardFooter />
        </div>
    );
};

export default CardTextWrapper;
