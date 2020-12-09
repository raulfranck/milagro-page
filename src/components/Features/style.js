import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--secondary);

  padding: 200px 0;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 25px 0; 
  }
`;

export const FeatureDescription = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  justify-content: center;

  > h1 {
    font-size: 45px;
    line-height: 53px;
    color: var(--text);
    font-weight: bold;
  }

  > p {
    font-size: 18px;
    font-weight: normal;
    margin-top: 20px;
    color: #ffffff;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 15%/50%;
  border: 3px solid var(--text);
  margin-top: 30px;
  color: var(--text);
  font-weight: bold;
  font-size: 21px;
  display: flex;
  opacity: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline-color: #ddd;
  transition: 0.3s;
  position: relative;

  width: 220px;
  height: 60px;

  &:hover {
    background: var(--text);
    color: var(--white);
  }
`;