import React from 'react';
import { Carousel } from './components/carousel/Carousel';
import styles from './styles.module.scss';

export const PizzasCollection: React.FC = () => (
  <div className={styles.wrapper}>
    <p className="title">We offer a collection of our best pizzas</p>
    <Carousel />
  </div>
);
