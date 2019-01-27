import React, { Component } from 'react';
import './App.css';

import { Route, Router } from 'react-router-dom';
import { history } from './history';

// import Component
import Header from './component/header/Header';

class App extends Component {

    componentDidMount() {
      // user check 해야함. 라우트 페이지 리다이렉트 유저 체크 여부에 따라서..
    }

    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <Route exact path={`/`} component={Header} />
                </div>
            </Router>
        );
    }
}

export default App;
