import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import Logo from '../../assets/images/logo.jpg';
import Video from '../Video/index';

import SeloStartupGrind from '../SeloStartupGrind/index';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavImage,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './style';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click)

  return (
    <>
      <SeloStartupGrind />
      <Video></Video>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavImage src={Logo} />
          </NavLogo>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>Features</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>Galery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>Plans</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>FAQ</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/'>Contact</NavLinks>
            </NavItem>
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;

