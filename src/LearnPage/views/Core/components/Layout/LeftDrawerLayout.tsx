import React from 'react';
import classNames from 'classnames'
import styles from './Layout.module.css';

interface LeftDrawerLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  expand?: Boolean;
}
export function LeftDrawerLayout({ left, right, expand }: LeftDrawerLayoutProps) {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.left_drawer, expand && styles.left_drawer_expand)}>{left}</div>
      <div className={classNames(styles.right_container, expand && styles.right_container_expand)}>{right}</div>
    </div>
  );
}
