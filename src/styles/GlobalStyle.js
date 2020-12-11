import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'roboto', sans-serif;
    font-weight: bold;
  }

  :root {
    --white: #FFFFFF;
    --primary: #242944;
    --secondary: #2C3354;
    --text: #F34B5E;
    --body: #FFFFFF;
    --separator: #7A80A5;
    --divisors: #F4F5F7;
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  

  background: var(--divisors);
`;

