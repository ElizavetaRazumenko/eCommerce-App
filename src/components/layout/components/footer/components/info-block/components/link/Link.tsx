import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
  type: 'location' | 'email' | 'telephone';
  content: string;
  href: string;
};

export const Link: React.FC<Props> = ({ type, content, href }) => (
  <a className={styles.link} href={href}>
    <div
      className={classNames(styles.icon, {
        [styles.location]: type === 'location',
        [styles.email]: type === 'email',
        [styles.telephone]: type === 'telephone',
      })}
    ></div>
    <p className={styles.content}>{content}</p>
  </a>
);
