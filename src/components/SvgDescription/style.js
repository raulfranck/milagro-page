import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -50px;

  flex-wrap: wrap;

  background: var(--white);

  width: 100%;
  height: 500px;
`;

export const Description = styled.div`
  width: 450px;
  height: 320px;
  background: var(--divisors);
  border-radius: 300px;

  > p {
    font-size: 45px;
    line-height: 53px;
    margin-bottom: 10px;
    color: var(--text);
    font-weight: bold;
  }

  > span {
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;

    text-align: left;
    position: relative;
  }
`

export const SvgContent = styled.div`
  padding: 0 50px;
`

