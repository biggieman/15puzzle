import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';

import App from './components/App/App';
import { loadState, saveState, clearState } from './store/localStorage';

import './index.css';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    const state = store.getState();

    if (state.started) {
        saveState(state);
    } else {
        clearState();
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
