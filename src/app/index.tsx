import React from 'react';
import { App } from './App';

import { ThemeProvider } from '@app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
)