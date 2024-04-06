import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../loader/Loader';
import { ErrorBoundary } from '../error-boundary/ErrorBoundary';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import styles from './styles.module.scss';

export const Layout: React.FC = () => (
  <div className={styles.app_wrapper}>
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        <Header />
        <Outlet />
        <Footer />
      </ErrorBoundary>
    </Suspense>
  </div>
);
