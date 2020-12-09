import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: var(--secondary);

  > div {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    > p {
      font-size: 20px;
      color: var(--white);
      font-weight: 100;
      justify-content: center;
      max-width: 1000px;
    }
  }
`;