import React from 'react';

import GolLogo from '../../assets/images/clients/gol.png'
import AmericanasLogo from '../../assets/images/clients/americanas.png'
import HavaianasLogo from '../../assets/images/clients/havaianas.png'
import SubmarinoLogo from '../../assets/images/clients/submarino.png'
import ShoptimeLogo from '../../assets/images/clients/shoptime.png'
import RefLogo from '../../assets/images/clients/ref.png'
import AMadreLogo from '../../assets/images/clients/amadre.png'
import IdtbwaLogo from '../../assets/images/clients/idtbwa.png'
import LvlLogo from '../../assets/images/clients/lvl.png'
import JussiLogo from '../../assets/images/clients/jussi.png'

import { Container } from './style';

const Clients = () => {
  return (
    <>
      <Container>
        <div>
          <div>
            <img src={GolLogo} alt="gol logo"></img>
          </div>
          <div>
            <img src={AmericanasLogo} alt="americanas logo"></img>
          </div>
          <div>
            <img src={HavaianasLogo} alt="havaianas logo"></img>
          </div>
          <div>
            <img src={SubmarinoLogo} alt="submarino logo"></img>
          </div>
          <div>
            <img src={ShoptimeLogo} alt="shoptime logo"></img>
          </div>
          <div>
            <img src={RefLogo} alt="ref logo"></img>
          </div>
          <div>
            <img src={AMadreLogo} alt="amadre logo"></img>
          </div>
          <div>
            <img src={IdtbwaLogo} alt="idtbwa logo"></img>
          </div>
          <div>
            <img src={LvlLogo} alt="lvl logo"></img>
          </div>
          <div>
            <img src={JussiLogo} alt="jussi logo"></img>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Clients;