/* eslint-disable react/display-name */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { App } from './App';

export default () => (
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
)