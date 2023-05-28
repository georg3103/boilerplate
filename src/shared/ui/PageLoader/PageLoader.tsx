import React from 'react';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = (props) => {
  return (
    <div className={styles.pageLoader}>
      <div className={styles.ldsDualRing} />
    </div>
  );
};
