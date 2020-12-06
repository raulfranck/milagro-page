import React from 'react';

import { TitleContainer } from './style'

const Title = (props) => {
  return (
    <>
      <TitleContainer>
        <p>{props.props}</p>
        <span></span>
      </TitleContainer>
    </>
  )
}

export default Title;