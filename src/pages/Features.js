import React from 'react';

import Navbar from '../components/Navbar/index';
import Clients from '../components/Clients/index';
import Title from '../components/Title/index';
import Carousel from '../components/carousel/index';
import Rodape from '../components/Rodape/index';
import FeaturesContent from '../components/FeaturesContent/index';
import FeaturesCard from '../components/FeaturesCard/index';
import SeccondTitle from '../components/SeccondTitle/index';
import Subtitle from '../components/Subtitle/index';

const titleText = {
  firstTitle: "Features",
  secondTitle: "Who believes in Milagro?",
  description: "Cool artwork doesn’t just pop up. New and fresh ideas come up with free minds. Our unique features separate us from outdated banner making tools. Welcome to the new world of Milagro."
}

const FeaturesPage = () => {
  return (
    <>
      <Navbar />
      <SeccondTitle props={titleText} />
      <Subtitle props={titleText} />
      <FeaturesContent />
      <FeaturesCard />
      <Clients />
      <Title props={titleText.secondTitle} />
      <Carousel />
      <Rodape />
    </>
  )
}

export default FeaturesPage;