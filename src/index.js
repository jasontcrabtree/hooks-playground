import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserProvider from './UseContextDemoAuth';
import App from './App';

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);
