import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import Navbar from './components/Navbar/index'

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
      </Router>
    </>
  );
}

export default App;
