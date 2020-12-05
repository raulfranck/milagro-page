import React from 'react';
import Startupgrind from '../../assets/images/startupgrind.png';

import {
  SeloSide,
  SeloLogo,
  SeloImg,
  StartupText
} from './style.js';

const SeloStartupGrind = () => {

  return (
    <SeloSide>
      <SeloLogo>
        <SeloImg src={Startupgrind} />
      </SeloLogo>
      <StartupText>Selected to attend the Startup Grind Global Conference 2020 as Exhibitor</StartupText>
    </SeloSide>
  )
}

export default SeloStartupGrind;