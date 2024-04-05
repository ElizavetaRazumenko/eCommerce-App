import React from 'react';
import styles from './styles.module.scss';

export const Questions: React.FC = () => (
  <div className={styles.wrapper}>
    <p className={styles.title}>For questions</p>
    <a className={styles.link} href="mailto:pizza_italiano@food.com">
      <div className={`${styles.icon} ${styles.email}`}></div>
      <p className={styles.content}>pizza_italiano@food.com</p>
    </a>
    <a className={styles.link} href="tel:+37539125621548">
      <div className={`${styles.icon} ${styles.number}`}></div>
      <p className={styles.content}>+39 12 562 15 48</p>
    </a>
  </div>
);
