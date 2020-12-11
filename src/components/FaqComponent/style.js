import styled from 'styled-components';

export const FaqContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  margin: 20rem 0;
`;

export const Card = styled.div`
  width: 100%;
  height: 80px;

  background: #fff;

  margin-top: 10px;

  border-radius: 10px;

  display: flex;
  
  padding: 0 30px;

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    > p {
      font-size: 25px;
      font-weight: bold;

      color: #242944;
    }
  }
`;