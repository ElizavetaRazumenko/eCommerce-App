import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from './components/error-boundary/ErrorBoundary';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import styles from './styles.module.scss';
import { Loader } from './components/loader/Loader';

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
