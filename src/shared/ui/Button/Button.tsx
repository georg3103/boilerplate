import cn from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, theme = ThemeButton.CLEAR, ...otherProps } = props;
  return (
    <button
      className={cn(styles.button, [styles[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
