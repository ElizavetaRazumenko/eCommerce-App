import React from 'react';
import styles from './styles.module.scss';

export const Welcome: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.content_wrapper}>
      <h1>Welcome to the Italian pizzeria!</h1>
      <p className={`${styles.content} subtitle content`}>
        We have been preparing the best pizza for you for many years. Our chefs
        use the finest ingredients and the freshest vegetables for cooking. But
        the most important ingredient is that we make pizza with love!
      </p>
    </div>
    <div className={styles.pizza}></div>
  </div>
);
