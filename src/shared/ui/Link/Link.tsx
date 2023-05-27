import React from 'react';
import cn from 'classnames';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import styles from './Link.module.scss';

interface LinkProps extends RouterLinkProps {
  className?: string;
}

export const Link: React.FC<LinkProps> = (props) => {
  const { to, className, children, ...otherProps } = props;
  return (
    <RouterLink
      className={cn(styles.link, [className])}
      to={to}
      {...otherProps}
    >
      {children}
    </RouterLink>
  );
};
