import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 200px;

  align-items: center;
  text-align: center;

  background: #F4F5F7;
  padding: 70px;

  > div {
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h2 {
    font-size: 35px;
    color: var(--secondary);
    }

    > span {
      width: 60px;
      height: 4px;
      margin-top: 15px;
      background: var(--text);
    }

    > p {
      max-width: 60%;
      display: flex;
      justify-content: center;
      padding-top: 50px;

      font-size: 20px;
      color: #242944;

      font-weight: normal;
      max-width: 880px;
    }
  }
  
`;