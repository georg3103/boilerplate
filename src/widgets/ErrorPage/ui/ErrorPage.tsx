import React from 'react';
import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const reloadPage = () => {
    location.reload();
  }

  return (
    <div className={styles.ErrorPage}>
      <button onClick={reloadPage}>reload page</button>
      {props.children}
    </div>
  );
};
