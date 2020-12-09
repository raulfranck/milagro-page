import React from 'react';

import Navbar from '../components/Navbar/index';
import Rodape from '../components/Rodape/index';
import PlansContainer from '../components/PlansContainer/index';

const titleText = {
  firstTitle: "Reasons to believe in Milagro",
  secondTitle: "Who believes in Milagro?"
}

const Plans = () => {

  return (
    <>
      <Navbar />
      <PlansContainer />
      <Rodape />
    </>
  )
}

export default Plans;