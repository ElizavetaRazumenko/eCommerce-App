import React from 'react';
import { Logo } from '../logo/Logo';
import { Location } from './components/location/Location';
import { Questions } from './components/questions/Questions';
import styles from './styles.module.scss';

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <Logo />
    <div className={styles.info_wrapper}>
      <Location />
      <Questions />
    </div>
  </footer>
);
