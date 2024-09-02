import React from 'react';
import styles from './styles.module.scss';

export const Logo: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.top_string_wrapper}>
      <p className={styles.title}>Italian pizza</p>
      <div className={styles.parsley}></div>
    </div>
    <p className={styles.subtitle}>the best for you</p>
  </div>
);
