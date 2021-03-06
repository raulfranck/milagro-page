import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import Logo from '../../assets/images/logo.jpg';

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
              <NavLinks to='/features'>Features</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/gallery'>Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/plans'>Plans</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/faq'>FAQ</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;

