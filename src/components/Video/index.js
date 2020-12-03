import React from 'react';

import { VideoStyle } from './style'

import Vid from '../../assets/images/video_bg_800x400.mp4';

const Video = () => {
  return (
    <div>
      <VideoStyle src={Vid} />
    </div>
  )
}

export default Video;