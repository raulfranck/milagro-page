import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import HomePage from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <HomePage />
      </Router>
    </>
  );
}

export default App;
