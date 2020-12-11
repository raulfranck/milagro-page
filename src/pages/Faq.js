import React from 'react';
import { Container } from '../styles/GlobalStyle';

import PlansTitle from '../components/PlansTitle';
import Navbar from '../components/Navbar';
import FaqComponent from '../components/FaqComponent/index';
import Rodape from '../components/Rodape/index';

const Faq = () => {
  return (
    <>
      <Container>
        <Navbar />
        <PlansTitle />

        <FaqComponent />

        <Rodape />
      </Container>
    </>
  )
}

export default Faq;