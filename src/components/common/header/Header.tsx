import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../logo/Logo';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <div className={styles.links_container}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.link_active}` : styles.link
            }
          >
            Main
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.link_active}` : styles.link
            }
          >
            Catalog
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.link_active}` : styles.link
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/basket"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.link_active}` : styles.link
            }
          >
            Basket
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.link_active}` : styles.link
            }
          >
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
