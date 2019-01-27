import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);

ReactDOM.render(<Provider store={store}><Root/></Provider>, document.getElementById('root'));

registerServiceWorker.default();