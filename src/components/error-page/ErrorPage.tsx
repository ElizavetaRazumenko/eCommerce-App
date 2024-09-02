import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/button/Button';
import styles from './styles.module.scss';

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <p className="title">Something went wrong...</p>
      <p className={styles.title}>404</p>
      <Button title="Go to Main page" onClick={() => navigate('/')} />
      <div className={styles.parsley}></div>
    </div>
  );
};
