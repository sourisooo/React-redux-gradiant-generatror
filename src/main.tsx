



import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

import { Provider } from 'react-redux';

import './styles/index.scss';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <Provider store={store}>
    <App />
  </Provider>,

);
