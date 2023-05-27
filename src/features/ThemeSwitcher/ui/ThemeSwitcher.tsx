import React from 'react';

import cn from 'classnames';

import { useTheme, Theme } from '@app/providers/ThemeProvider';

import { Button } from '@shared/ui';

import Dark from '@shared/assets/icons/dark.svg';
import Light from '@shared/assets/icons/light.svg';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={cn(styles.themeSwitcher, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <Light /> : <Dark />}
    </Button>
  );
};
