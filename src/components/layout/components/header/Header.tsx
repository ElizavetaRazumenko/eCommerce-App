import React from 'react';
import { Logo } from 'src/components/common/logo/Logo';
import { PAGES_LINKS } from './constants';
import { NavigationLink } from './components/navigation-link/NavigationLink';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <div className={styles.links_container}>
          {PAGES_LINKS.map((link) => (
            <NavigationLink key={link.to} to={link.to} content={link.content} />
          ))}
        </div>
      </nav>
    </header>
  );
};
