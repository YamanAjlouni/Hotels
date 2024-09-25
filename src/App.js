// App.js
import React from 'react';
import AppRoutes from './routes/Routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './components/footer/Footer';
import CityHeader from './pages/cityHeader/CityHeader';

function App() {
  return (
    <div>
      <Provider store={store}>
        <AppRoutes />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
