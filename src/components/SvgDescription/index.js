import React from 'react';
import Gif from '../../assets/images/ilustra03.gif'
import Gif01 from '../../assets/images/ilustra01_branco.gif'
import Gif02 from '../../assets/images/ilustra02.gif'

import { Container, Description, SvgContent } from './style';

const SvgDescription = () => {
  return (
    <>
      <Container>
        <Description>
          <p>70% of the <br></br> Process automated</p>
          <span><strong>The fastest way to create HTML banners, animated gifs and videos! </strong>
          Our cutting edge technology allows
          designers to focus on what really matters: being
          ahead. Let Milagro work its magic. Go be creative!
          </span>
        </Description>

        <SvgContent>
          <img src={Gif01} alt="Svg animation"></img>
        </SvgContent>
      </Container>

      <Container>
        <SvgContent>
          <img src={Gif02} alt="Svg animation"></img>
        </SvgContent>

        <Description>
          <p>Smart usage</p>
          <span>Easy Peasy! <strong>Intuitive timeline</strong> interface. Create your <br />
            own design with pro animations in a blink of an eye.
          </span>
        </Description>
      </Container>

      <Container>
        <Description>
          <p>Smart usage</p>
          <span>Easy Peasy! <strong>Intuitive timeline</strong> interface. Create your <br />
            own design with pro animations in a blink of an eye.
          </span>
        </Description>

        <SvgContent>
          <img src={Gif} alt="Svg animation"></img>
        </SvgContent>
      </Container>

    </>
  )
}

export default SvgDescription;