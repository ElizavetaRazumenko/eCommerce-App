import React from 'react';
import styles from './styles.module.scss';

export const Loader: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.loader}></div>
  </div>
);
