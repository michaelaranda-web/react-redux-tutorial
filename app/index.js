import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import './stylesheets/index.css';

let store = createStore(todoApp);

store.dispatch({
  id: 1,
  type: 'ADD_TODO',
  completed: true,
  text: 'Example to-do list item'
});

store.dispatch({
  id: 2,
  type: 'ADD_TODO',
  completed: false,
  text: 'Another example'
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
