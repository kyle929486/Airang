import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import AirangApp from './airang-client/AirangApp';

import store from './airang-client/store'
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { AuthContextProvider } from './airang-client/store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    {/* <AuthContextProvider> */}
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <AirangApp />
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
    {/* </AuthContextProvider> */}
    {/* </React.StrictMode> */}
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
