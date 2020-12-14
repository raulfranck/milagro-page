import styled from 'styled-components';

export const MainContainer = styled.div`
  margin-top: 350px;
`;

export const WhiteContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;

  /* margin-top: 300px; */

  > div {
    display: flex;
    
    text-align: left;
    margin: 0 auto;
    flex-direction: column;

    width: 80%;

    padding: 50px 0;

    > span {
      font-size: 30px;
      font-weight: bold;
      color: var(--text);

      margin-bottom: 20px;
    }

    > p {
      font-size: 18px;
      font-weight: 100;

      color: #242944;
    }
  }
`;

export const GreyContainer = styled.div`
  width: 100%;
  background: var(--divisors);
  display: flex;
  flex-direction: column;


  > div {
    display: flex;
    justify-content: center;
    text-align: left;
    margin: 0 auto;
    flex-direction: column;

    width: 80%;

    padding: 50px 0;

    > span {
      font-size: 30px;
      font-weight: bold;
      color: var(--text);

      margin-bottom: 20px;
    }

    > p {
      font-size: 18px;
      font-weight: 100;

      color: #242944;
    }
  }
`;