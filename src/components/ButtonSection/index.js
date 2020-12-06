import React from 'react';
import PlayIcon from '../../assets/images/icon-cta-play.png'

import { BsArrowRight } from "react-icons/bs";

import { Container, VideoButton, FeaturesButton } from './style';

const ButtonsSection = () => {
  return (
    <>
      <Container>

        <div>
          <VideoButton>
            Watch Video
            <img src={PlayIcon} alt="play icon" />
          </VideoButton>

          <FeaturesButton>
            More Features
            <BsArrowRight size={25} color='white' />
          </FeaturesButton>
        </div>
      </Container>
    </>
  )
}

export default ButtonsSection;