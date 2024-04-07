import React from 'react';
import styles from './styles.module.scss';

type Props = {
  title: string;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ title, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    {title}
  </button>
);
