import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;

  background: var(--secondary);

  > div {
    width: 80%;
    background: transparent;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    padding-bottom: 250px;
  }
`;

export const Card = styled.div`
  width: 30%;
  height: 150px;

  display: flex;
  justify-content: space-between;

  align-items: center;

  background: var(--primary);
  border-radius: 10px;

  padding: 20px;
  margin: 5px 0;

  > p {
    color: var(--text);
    padding: 0 5px 0 20px;
  }
`;