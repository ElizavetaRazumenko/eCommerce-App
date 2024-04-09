import React from 'react';
import { usePizzaCarousel } from 'src/api/pizzas-carousel/queries';
import { Loader } from 'src/components/common/loader/Loader';
import { Card } from './components/card/Card';
import styles from './styles.module.scss';

export const Carousel: React.FC = () => {
  const { isPending, error, data } = usePizzaCarousel();

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return <p>{`An error has occurred: ${error.message}`}</p>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${styles.card_left}`}></div>

      <div className={styles.cards_wrapper}>
        {data.data.pizzas.map((pizza) => (
          <Card name={pizza.name} />
        ))}
      </div>

      <div className={`${styles.card} ${styles.card_right}`}></div>
    </div>
  );
};
