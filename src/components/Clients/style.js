import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--divisors);
  

  > div {
    display: flex;
    flex-wrap: wrap;

    width: 75%;
    height: auto;

    padding: 50px 0;

    > div {
      width: 200px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`