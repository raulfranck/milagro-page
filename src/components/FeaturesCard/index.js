import React from 'react';

import AutomatedIcon from '../../assets/features/features_icons/automated.png';
import ImageIcon from '../../assets/features/features_icons/image.png';
import ToolsIcon from '../../assets/features/features_icons/tools.png';
import cssIcon from '../../assets/features/features_icons/css.png';
import BrowserIcon from '../../assets/features/features_icons/css.png';
import BookIcon from '../../assets/features/features_icons/book.png';

import { Container, Card } from './style';

const FeaturesCard = () => {
  return (
    <>
      <Container>
        <div>
          <Card>
            <img src={AutomatedIcon} alt="automated icon" />
            <p>AUTOMATED Q&A:
                NO CODING SKILLS</p>
          </Card>
          <Card>
            <img src={ImageIcon} alt="automated icon" />
            <p>IMAGE OPTIMIZATION
AND PREVIEW</p>
          </Card>
          <Card>
            <img src={ToolsIcon} alt="automated icon" />
            <p>SIZE
OPTIMIZATION</p>
          </Card>
          <Card>
            <img src={cssIcon} alt="automated icon" />
            <p>CSS BASED ANIMATION:
            IMPROVED BANNER
            PERFORMANCE</p>
          </Card>
          <Card>
            <img src={BrowserIcon} alt="automated icon" />
            <p>CROSS-BROWSER
            COMPATIBILITY</p>
          </Card>
          <Card>
            <img src={BookIcon} alt="automated icon" />
            <p>NO EXTERNAL
            ANIMATION
            LIBRARY NEEDED</p>
          </Card>
        </div>
      </Container>
    </>
  )
}

export default FeaturesCard;