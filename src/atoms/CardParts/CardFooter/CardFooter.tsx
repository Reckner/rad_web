import React from 'react';
import classnames from 'classnames';
import styles from './CardFooter.module.scss';
import heart from './heart.svg';

const CardFooter = () => {
    return (
        <div className={styles.footer}>
            <button
                type="button"
                className={classnames('btn btn-primary', styles.button)}
            >
                <p>Купить</p>
            </button>
            <div className={styles.favorite}>
                <img src={heart} style={{ padding: '10px' }} />
            </div>
        </div>
    );
};

export default CardFooter;
