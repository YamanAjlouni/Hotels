// App.js
import React from 'react';
import AppRoutes from './routes/Routes';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
