import React from 'react';
import styles from './styles.module.scss';

export const ErrorPage: React.FC = () => (
  <div className={styles.wrapper}>
    <p className="title">Something went wrong...</p>
    <p className={styles.title}>404</p>
    <div className={styles.parsley}></div>
  </div>
);
