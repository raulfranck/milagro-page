import styled from 'styled-components';

export const SeloSide = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f34b5e;
  height: 30px;
  z-index: 9999;

  @media screen and (max-width: 767px){
    display: none;
  }
`

export const SeloLogo = styled.div`
  display: flex;
`

export const SeloImg = styled.img`
  padding-right: 20px;
`

export const StartupText = styled.p`
  font-weight: bold;
  font-size: 14px;
  display: block;
  padding-left: 20px;
  border-left: 1px solid #000;
  color: var(--white);
`