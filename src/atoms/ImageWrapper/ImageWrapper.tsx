import React from 'react';
import classnames from 'classnames';
import styles from './ImageWrapper.module.scss';
import { ImageSize } from '../../helpers/ImageSizes';

type ImageWrapper = {
    image: string;
    size: ImageSize;
};

const ImageWrapper = ({ size, image }: ImageWrapper) => {
    return (
        <div className={classnames('col', styles.imageWrapper)}>
            <img
                height={`${size.height}px`}
                width={`${size.width}px`}
                src={image}
            />
        </div>
    );
};

export default ImageWrapper;
