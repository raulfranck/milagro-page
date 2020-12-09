import styled from 'styled-components';

export const TitleContainer = styled.div`

  padding-top: 250px;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 200px;

  align-items: center;
  text-align: center;

  background: var(--secondary);
  padding: 70px;
  > p {
    font-size: 35px;
    color: var(--white);
  }

  > span {
    width: 60px;
    height: 4px;
    margin-top: 15px;
    background: var(--text);
  }

`