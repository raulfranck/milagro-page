import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 200px;

  align-items: center;
  text-align: center;

  background: var(--white);
  padding: 70px;
  > p {
    font-size: 35px;
    color: var(--secondary);
  }

  > span {
    width: 60px;
    height: 4px;
    margin-top: 15px;
    background: var(--text);
  }
`