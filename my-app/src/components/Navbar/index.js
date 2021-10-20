import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import "./style.css";

const Navbar = () => {

  var userType = localStorage.getItem('userType');
  React.useEffect(() => { 
    window.addEventListener('storage', () => {
      userType = localStorage.getItem('userType');     
    });     
  }, [])

  console.log(userType);
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/vol.png').default} alt='logo' className="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          {userType == null && <NavBtnLink to='/sign-up-vol'>Sign Up</NavBtnLink>}
          {userType == 'vol' && <NavBtnLink to='/profile'>Profile</NavBtnLink>}
          {userType == 'org' && <NavBtnLink to='/events'>Manage Events</NavBtnLink>}
        </NavBtn>
        
        <NavBtn>
          {userType == null && <NavBtnLink to='/signin'>Sign In</NavBtnLink>}
          {userType != null && <NavBtnLink to='/signout'>Sign Out</NavBtnLink>}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;