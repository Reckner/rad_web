import React from 'react';
import classnames from 'classnames';
import styles from './BlogIntersection.module.scss';

const BlogIntersection = () => {
    return (
        <section className={styles.wrapper}>
            <div className={classnames('container', styles.iconWrapper)}>
                <div className={classnames('col-3', styles.colWrapper)}>
                    <div>
                        <img src="/images/intr_1.png" />
                        <p>Бесплатная консультация</p>
                    </div>
                </div>
                <div className={classnames('col-3', styles.colWrapper)}>
                    <div>
                        <img src="/images/intr_2.png" />
                        <p>Специальные предложения</p>
                    </div>
                </div>
                <div className={classnames('col-3', styles.colWrapper)}>
                    <div>
                        <img src="/images/intr_3.png" />
                        <p>Широкий ассортимент</p>
                    </div>
                </div>
                <div className={classnames('col-3', styles.colWrapper)}>
                    <div>
                        <img src="/images/intr_4.png" />
                        <p>Возможность возврата</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogIntersection;
