import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './components/main-page/MainPage';
import { Layout } from './components/common/layout/Layout';
import { CatalogPage } from './components/catalog-page/CatalogPage';
import { ErrorPage } from './components/error-page/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'catalog',
        element: <CatalogPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export const App: React.FC = () => <RouterProvider router={router} />;
