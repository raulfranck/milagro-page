import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

import HomePage from './pages/Home';
import Gallery from './pages/Gallery';
import FeaturesPage from './pages/Features';
import Plans from './pages/Plans';
import Faq from './pages/Faq';
import YoutubeBanner from './pages/YoutubeBanner';
import FaceBookBanner from './pages/FaceBookBanner';
import InstagramAds from './pages/InstagramAds';
import TwitterAds from './pages/TwitterAds';
import DisplayAds from './pages/DisplayAds';
import Contact from './pages/Contact';

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

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/youtubebanner">
            <YoutubeBanner />
          </Route>

          <Route path="/facebookbanner">
            <FaceBookBanner />
          </Route>

          <Route path="/instagramads">
            <InstagramAds />
          </Route>

          <Route path="/twitterads">
            <TwitterAds />
          </Route>

          <Route path="/displayads">
            <DisplayAds />
          </Route>

        </Switch>
      </Router>



      <GlobalStyle />
    </>
  );
}

export default App;
