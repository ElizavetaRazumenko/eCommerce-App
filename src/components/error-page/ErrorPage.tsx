import React from 'react';
import styles from './styles.module.scss';

export const ErrorPage: React.FC = () => (
  <>
    <p className={styles.title}>404</p>
    <p className={styles.subtitle}>Something went wrong</p>
  </>
);
