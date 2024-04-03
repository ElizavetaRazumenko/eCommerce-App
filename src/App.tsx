import React from 'react';
import styles from './styles.module.scss';
import { Header } from './components/common/header/Header';
import { Footer } from './components/common/footer/Footer';

export const App: React.FC = () => (
  <div className={styles.app_wrapper}>
    <Header />
    <Footer />
  </div>
);
