import React from 'react';
import { Logo } from 'src/components/common/logo/Logo';
import { InfoBlock } from './components/info-block/InfoBlock';
import { COMPANY_INFORMATION } from './constants';
import styles from './styles.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.info_wrapper}>
        {COMPANY_INFORMATION.map((info) => (
          <InfoBlock key={info.title} title={info.title} links={info.links} />
        ))}
      </div>
    </footer>
  );
};
