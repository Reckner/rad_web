import React, { ReactElement } from 'react';
import classnames from 'classnames';
import ImageWrapper from '../../atoms/ImageWrapper';
import CardTextWrapper from '../../atoms/CardParts/CardTextWrapper';
import { md } from '../../helpers/ImageSizes';
import styles from './Card.module.scss';

type Card = {
    text: string;
    price: string;
    image: string;
};

const Card = ({ text, price, image }: Card) => {
    return (
        <div className={styles.card}>
            <div
                className={classnames('container', styles.cardWrapper)}
                style={{ padding: 0 }}
            >
                <ImageWrapper size={md} image={image} />
                <CardTextWrapper text={text} price={price} />
            </div>
        </div>
    );
};

export default Card;
