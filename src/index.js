import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './Reducer';
import Counter from '../src/components/Counter';

const store = createStore(Reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(
  <App />, 
  document.getElementById('root'));