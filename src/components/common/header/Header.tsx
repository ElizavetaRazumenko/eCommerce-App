import React from 'react';
import { Logo } from '../logo/Logo';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles.ul}>
          <li className={`${styles.li} ${styles.li_active}`}>Main</li>
          <li className={styles.li}>Catalog</li>
          <li className={styles.li}>Profile</li>
          <li className={styles.li}>Basket</li>
          <li className={styles.li}>Login</li>
        </ul>
      </nav>
    </header>
  );
};
