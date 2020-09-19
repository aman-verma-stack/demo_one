import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Routes from './Routers/Router';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
