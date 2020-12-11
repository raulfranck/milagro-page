import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background: var(--divisors);
  display: flex;
  justify-content: center;

  > div {
    width: 674px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 433px;

    background: transparent;
    margin: 250px 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--white);

  padding: 62px 29px 81px 29px;
  width: 322px;
  height: 382px;

  border-radius: 16px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
		position: relative;
		font-weight: bold;
    text-align: center;
    color: #242944;
    font-size: 20px;
    line-height: 23px;
  }
		> span {
		color: #f34b5e;
		font-weight: bold;

    font-size: 20px;
    line-height: 23px;
	}
`

export const IndividualButton = styled.button`
    width: 230px;
    height: 60px;
    border-radius: 12%/48%;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    position: relative;
    transition: 0.3s;
    margin: 0 auto;
    background: var(--text);
`;

export const TeamButton = styled.button`
    width: 230px;
    height: 60px;
    border-radius: 12%/48%;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    position: relative;
    transition: 0.3s;
    margin: 0 auto;
    background-color: #4a90e2;
`;