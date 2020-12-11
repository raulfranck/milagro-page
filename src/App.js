import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import HomePage from './pages/Home';
import Gallery from './pages/Gallery';
import FeaturesPage from './pages/Features';
import Plans from './pages/Plans';
import Faq from './pages/Faq';

function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/features">
            <FeaturesPage />
          </Route>

          <Route path="/gallery">
            <Gallery />
          </Route>

          <Route path="/plans">
            <Plans />
          </Route>

          <Route path="/faq">
            <Faq />
          </Route>

        </Switch>
      </Router>



      <GlobalStyle />
    </>
  );
}

export default App;
