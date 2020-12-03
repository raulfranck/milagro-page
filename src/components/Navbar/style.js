import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background-color: #fff;
    /* display: table; */
    width: 80%;
    height: 80px;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 60px;
    /* top: 68px; */
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
    z-index: 9999;
  }
`;

export const NavbarContainer = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin: 0 auto;
`;

export const NavLogo = styled(Link)`
  height: 80px;
  display: flex;
  align-items: center;
`;

export const NavImage = styled.img`
    text-align: center;
    width: 160px;
    color: #fff;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 2px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  width: 45%;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.7 ease;
    background: var(--white);
  }
`

export const NavItem = styled.li`
  height: 80px;
  list-style: none;

  display: flex;

  align-items: center;
  @media screen and (max-width: 960px){
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  color: #242944;
	text-decoration: none;
  
  &:hover {
    color: #f34b5e;
  }

  @media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #f34b5e;
      transition: all 0.3 ease;
    }
  }
`

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

