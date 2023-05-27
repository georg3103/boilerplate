import cn from 'classnames'
import React from 'react'

import { useTheme, Theme } from '@app/providers/ThemeProvider'


import Dark from '@shared/assets/icons/dark.svg'
import Light from '@shared/assets/icons/light.svg'
import { Button } from '@shared/ui'

import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={cn(styles.themeSwitcher, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <Light /> : <Dark />}
    </Button>
  )
}
