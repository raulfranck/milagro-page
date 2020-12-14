import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Section = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background: var(--divisors);
`;

export const AddresSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    > img {
      width: 50px;
      margin-right: 10px;
    }

    > div {
      display: flex;
      flex-direction: column;


      > h2 {
        font-weight: bold;
        font-size: 20px;
      }

      > span {
        font-weight: 100;
      }
    }
  }
`;


export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;

    
  }
`;