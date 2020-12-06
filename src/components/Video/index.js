import React from 'react';
import Poster from '../../assets/images/video.jpg'
import PlayIcon from '../../assets/images/icon-cta-playWhite.png'

import './style';

import { VideoStyle, VideoContainer, BannerCount, ButtonBanner } from './style'

import Vid from '../../assets/images/video_bg_800x400.mp4';

const Video = () => {
  return (
    <VideoContainer>

      <BannerCount>
        <p>The market’s single banner-making tool
				that saves up to <span>70% of development time</span></p>
      </BannerCount>

      <ButtonBanner>
        Watch Video
        <img src={PlayIcon} alt="Play video"></img>
      </ButtonBanner>

      <VideoStyle src={Vid} muted autoPlay loop poster={Poster} />
    </VideoContainer>
  )
}

export default Video;