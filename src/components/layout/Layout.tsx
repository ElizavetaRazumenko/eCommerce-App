import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { QUERY_CLIENT } from './constants';
import { Loader } from '../common/loader/Loader';
import { ErrorBoundary } from './components/error-boundary/ErrorBoundary';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import styles from './styles.module.scss';

export const Layout: React.FC = () => (
  <div className={styles.app_wrapper}>
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>
        <QueryClientProvider client={QUERY_CLIENT}>
          <Header />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  </div>
);
