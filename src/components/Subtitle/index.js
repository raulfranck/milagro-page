import React from 'react';

import { Container } from './style';

const Subtitle = (props) => {
  return (
    <>
      <Container>
        <div>
          <p>{props.props.description}</p>
        </div>
      </Container>
    </>
  )
}

export default Subtitle;