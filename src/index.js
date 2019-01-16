import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ActionCreators } from 'redux-undo'
import rootReducer from './store/reducers';

import App from './components/App/App';
import { loadState, saveState, clearState } from './store/localStorage';

import './index.css';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

// clear history at begin
store.dispatch(ActionCreators.clearHistory());

store.subscribe(() => {
    const state = store.getState();

    if (state.present.win || !state.present.started) {
        clearState();
    } else {
        saveState(state);
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
