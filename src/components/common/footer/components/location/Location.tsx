import React from 'react';
import styles from './styles.module.scss';

export const Location: React.FC = () => (
  <div className={styles.wrapper}>
    <p className={styles.title}>Our location</p>
    <a
      className={styles.link}
      href="https://yandex.by/maps/10445/rome/search/Rome%2C%20st.%20Via%20Tuscolana%2C%20225/?ll=12.533407%2C41.869911&sll=27.555691%2C53.902735&sspn=0.471725%2C0.179023&z=14"
    >
      <div className={styles.icon}></div>
      <p className={styles.address}>Rome, st. Via Tuscolana, 225</p>
    </a>
    <a
      className={styles.link}
      href="https://yandex.by/maps/10445/rome/house/ZUsYcwFnS0IPQFprfXR5eXVkZA==/?ll=12.567278%2C41.888970&z=17"
    >
      <div className={styles.icon}></div>{' '}
      <p className={styles.address}>Rome, st. dei Chiclamini, 5</p>
    </a>
  </div>
);
