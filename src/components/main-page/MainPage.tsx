import React from 'react';
import { Welcome } from './components/welcome/Welcome';
import { PizzasCollection } from './components/pizzas-collection/PizzasCollection';
import styles from './styles.module.scss';

export const MainPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Welcome />
      <PizzasCollection />
    </div>
  );
};
