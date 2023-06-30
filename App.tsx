import React from 'react';
import { Navigation } from './components/Navigation';
import { Provider } from 'react-redux';
import { store } from './components/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;