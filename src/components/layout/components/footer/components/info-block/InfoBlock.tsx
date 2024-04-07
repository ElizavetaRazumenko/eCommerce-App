import React from 'react';
import classNames from 'classnames';
import { Link } from './components/link/Link';
import { Link as LinkType } from './types';
import styles from './styles.module.scss';

type Props = {
  title: string;
  links: LinkType[];
};

export const InfoBlock: React.FC<Props> = ({ title, links }) => (
  <div
    className={classNames({
      [styles.wrapper]: title.endsWith('location'),
    })}
  >
    <p className={styles.title}>{title}</p>
    {links.map((link) => (
      <Link
        key={link.title}
        type={link.type}
        content={link.title}
        href={link.href}
      />
    ))}
  </div>
);
