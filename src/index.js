import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const middleware = store => next => action => {
  const result = next(action)
  console.log(store.getState())
  return result
}

const store = createStore(rootReducer, applyMiddleware(middleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
