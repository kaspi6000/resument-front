import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
                    <Switch>
                        <Route exact path = "/" component = {App}></Route>
                    </Switch>
                </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
