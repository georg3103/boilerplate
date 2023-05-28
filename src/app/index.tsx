/* eslint-disable react/display-name */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { App } from './App';

export default () => (
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)