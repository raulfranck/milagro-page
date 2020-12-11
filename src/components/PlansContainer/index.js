import React from 'react';

import { Container, Card, IndividualButton, TeamButton } from './style';

import individualIcon from '../../assets/plans/individual-plans.png';
import teamIcon from '../../assets/plans/team-plans.png';

const PlansContainer = () => {
  return (
    <>
      <Container>
        <div>
          <Card>
            <div>
              <img src={individualIcon} alt="individual plans icon" />
            </div>
            <p>Operate Milagro <br /> in your <span style={{ color: "var(--text)" }}>Career</span></p>
            <IndividualButton>Individual Plans</IndividualButton>
          </Card>
          <Card>
            <div>
              <img src={teamIcon} alt="team plans icon" />
            </div>
            <p>Operate Milagro <br />in your <span style={{ color: "#4a90e2" }}>Businnes</span></p>
            <TeamButton>Individual Plans</TeamButton>
          </Card>
        </div>
      </Container>
    </>
  )
}

export default PlansContainer;