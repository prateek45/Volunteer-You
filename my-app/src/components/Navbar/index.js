import React, {useState} from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import "./style.css";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [userTyp, forceUpdate] = useState(localStorage.getItem('userType'));
  const location = useLocation();

  React.useEffect(() => {
  }, [location])

  function signOut() {
    localStorage.clear()
    forceUpdate()
  }


  console.log(userTyp)
  var userType = localStorage.getItem('userType');
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
          {userType != null && <NavBtnLink to='/' onClick = {signOut}>Sign Out</NavBtnLink>}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;