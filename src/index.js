import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomThemeProvider from './themes/CustomThemeProvider'
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <CustomThemeProvider>
    <CssBaseline />
    <App />
  </CustomThemeProvider>
);