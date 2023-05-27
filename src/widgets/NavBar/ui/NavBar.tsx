import React from 'react';
import cn from 'classnames';

import { Link } from '@shared/ui';
import { ThemeSwitcher } from '@features/ThemeSwitcher'

import styles from './NavBar.module.scss';

enum LinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface NavBarProps {
  className?: string;
  theme?: LinkTheme;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { className, theme = LinkTheme.PRIMARY } = props;
  return (
    <div className={cn(styles.navbar, [className, styles[theme]])}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </div>
  );
};
