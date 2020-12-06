import React from 'react';

import { TitleContainer } from './style'

const Title = (props) => {
  return (
    <>
      <TitleContainer>
        <p>{props.props.firstTitle}</p>
        <span></span>
      </TitleContainer>
    </>
  )
}

export default Title;