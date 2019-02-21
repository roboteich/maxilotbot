import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/main.scss';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { disableBodyScroll } from 'body-scroll-lock';

disableBodyScroll(document.getElementById('root'));

ReactDOM.render((
<BrowserRouter>
  <App />
</BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
