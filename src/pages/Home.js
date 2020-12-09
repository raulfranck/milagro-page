import React from 'react';

import SeloStartupGrind from '../components/SeloStartupGrind/index';
import Video from '../components/Video/index';
import Navbar from '../components/Navbar/index';
import Title from '../components/Title/index';
import SvgDescription from '../components/SvgDescription/index';
import ButtonSection from '../components/ButtonSection/index';
import Clients from '../components/Clients/index';
import CarouselContainer from '../components/carousel/index';
import Rodape from '../components/Rodape/index';

const titleText = {
  firstTitle: "Reasons to believe in Milagro",
  secondTitle: "Who believes in Milagro?"
}

const HomePage = () => {

  return (
    <>
      <Navbar />
      <SeloStartupGrind />
      <Video />
      <Title props={titleText.firstTitle} />
      <SvgDescription />
      <ButtonSection />
      <Clients />
      <Title props={titleText.secondTitle} />
      <CarouselContainer></CarouselContainer>
      <Rodape />
    </>
  )
}

export default HomePage;