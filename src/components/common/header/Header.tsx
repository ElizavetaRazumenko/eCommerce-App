import React from 'react';
import { Logo } from '../../logo/Logo';

export const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>Main</li>
          <li>Catalog</li>
          <li>Profile</li>
          <li>Basket</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};
