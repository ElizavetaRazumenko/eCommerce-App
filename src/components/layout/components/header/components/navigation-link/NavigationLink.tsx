import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

type Props = {
  to: string;
  content: string;
};

export const NavigationLink: React.FC<Props> = ({ to, content }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? `${styles.link} ${styles.link_active}` : styles.link
    }
  >
    {content}
  </NavLink>
);
