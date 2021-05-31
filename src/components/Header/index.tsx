import Link from 'next/link';
import React from 'react';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href='/'>
          <img src="/spacetraveling.svg" alt="logo" />
        </Link>
      </div>
    </header>
  )
}
