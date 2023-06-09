import cn from 'classnames';
import React from 'react';

import { ThemeSwitcher } from '@features/ThemeSwitcher'
import { Link } from '@shared/ui';

import styles from './NavBar.module.scss';

enum LinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface NavBarProps {
  className?: string;
  theme?: LinkTheme;
}

const ABOUT_ROUTE = '/about'; // TODO: move to config

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { className, theme = LinkTheme.PRIMARY } = props;
  return (
    <div className={cn(styles.navbar, [className, styles[theme]])}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <Link to={'/'}>Main</Link>
        <Link to={ABOUT_ROUTE}>About</Link>
      </div>
    </div>
  );
};
