import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import Home from './containers/Home';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

import './index.css';

injectTapEventPlugin();

ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <MuiThemeProvider>
                <Home />
            </MuiThemeProvider>
        </Provider>
    , document.getElementById('root'));
