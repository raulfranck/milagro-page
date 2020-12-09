import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background: var(--divisors);
  display: flex;
  justify-content: center;

  > div {
    width: 650px;
    display: flex;
    justify-content: space-between;
    height: 300px;

    background: transparent;
    margin: 250px 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);

  padding: 30px;

  border-radius: 10px;
`;