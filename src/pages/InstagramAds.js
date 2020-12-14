import React from 'react';
import { Container } from '../styles/GlobalStyle';

import PlansTitle from '../components/PlansTitle';
import Navbar from '../components/Navbar';

import Rodape from '../components/Rodape/index';
import DescriptionContainer from '../components/InstagramDescriptionContainer/index';

const Faq = () => {
  return (
    <>
      <Container>
        <Navbar />
        <PlansTitle />

        <DescriptionContainer />

        <Rodape />
      </Container>
    </>
  )
}

export default Faq;