import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: var(--white);

  justify-content: center;


  > div {
    display: flex;

    width: 95%;
    height: 100%;
  }

  
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;

  width: auto%;
  > div {
    display: flex;
    flex-direction: column;

    width: auto;
    > p {
      font-weight: 100;
      font-size: 16px;
      line-height: 19px;
      max-width: 379px;
      margin-bottom: 10px;
      color: #242944;
    }

    > h3 {
      text-align: left;

      margin-bottom: 3px;
      color: #242944;
      
    }

    > span {
      font-weight: normal;
      text-align: center;
      max-width: 379px;
      margin-bottom: 10px;
      color: #242944;
      text-align: left;
    }
  }
`;