import cn from 'classnames'
import React, { Suspense } from 'react'

import { useTranslation } from 'react-i18next'
import { AppRouter } from '@app/providers/router'
import { useTheme } from '@app/providers/ThemeProvider'

import { NavBar } from '@widgets/NavBar'

import './styles/index.scss'

const Comp = () => {
  const { t, i18n } = useTranslation()

  const toggle = async (): Promise<void> => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return (
    <div>
      <button onClick={toggle}>chaneLand</button>
      {t('shit')}
    </div>
  )
}

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={cn(['app', theme])}>
      <Suspense fallback="...">
        <NavBar />
        <Comp />
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
