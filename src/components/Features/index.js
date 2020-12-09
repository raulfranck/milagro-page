import React from 'react';

import { Container, FeatureDescription, Button } from './style'

import Ilustra01 from '../../assets/features/ilustra01_azul.gif';
import Ilustra02 from '../../assets/features/ilustra04.gif';
import Ilustra03 from '../../assets/features/ilustra05.gif';
import Ilustra04 from '../../assets/features/ilustra06.gif';

const Features = () => {
  return (
    <>
      <Container>
        <div>
          <FeatureDescription>
            <h1>Export to HTML, HTML AMP,
              Animated gif and video</h1>
            <p>
              Provides different outputs for the same file.
            </p>

            <Button>Watch Video</Button>
          </FeatureDescription>

          <div>
            <img src={Ilustra01} alt="feature ilustração gif" />
          </div>
        </div>
        <div>
          <div style={{ marginRight: "70px" }}>
            <img src={Ilustra02} alt="feature ilustração gif" />
          </div>

          <FeatureDescription>
            <h1>Multiple output for any ad
                servers</h1>
            <p>
              24/7 update! In case any change in template specifications
              happens, leave it to us. We will make automatic alterations to
              them, so it continues to be compatible. That's right:
              programming is not necessary.
            </p>

            <Button>Watch Video</Button>
          </FeatureDescription>
        </div>
        <div>
          <FeatureDescription>
            <h1>Free Animation templates</h1>
            <p>
              Changing your template is just a click away with our constantly
              updated library. You can also explore possibilities by creating
              your own design.
            </p>

            <Button>Watch Video</Button>
          </FeatureDescription>

          <div>
            <img src={Ilustra03} alt="feature ilustração gif" />
          </div>
        </div>
        <div>
          <div style={{ marginRight: "70px" }}>
            <img src={Ilustra04} alt="feature ilustração gif" />
          </div>

          <FeatureDescription>
            <h1>Banner approval system</h1>
            <p>
              Generates a step by step preview link for a full follow
              up of the creative process.
            </p>

            <Button>Watch Video</Button>
          </FeatureDescription>
        </div>

      </Container>
    </>
  )
}

export default Features;