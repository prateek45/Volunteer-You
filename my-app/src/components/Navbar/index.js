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
  //Describes a constant userTyp and it's setter forceUpdate, along with constant location.
  const [userTyp, forceUpdate] = useState(localStorage.getItem('userType'));
  const location = useLocation();

  //Modifies location whenever the page changes, forcibly rerendering the navbar and refreshing 
  //the value of usertype.
  React.useEffect(() => {
  }, [location])

  //Function to clear the userCredentials from localStorage, then force the component to rerender.
  function signOut() {
    //The userTyp console.log is just to supress the no-unused-variables warning, as userTyp was never meant to actually be used.
    console.log(userTyp)
    localStorage.clear()
    forceUpdate()
  }

  //A Variable describing the type of user and thus the content they have access to.
  //null by default, 'vol' if volunteer, 'org' if organisation.
  var userType = localStorage.getItem('userType');
  //Serves navbar content
  //Towards bottom, content is served depending on type of user.
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
          {userType === null && <NavBtnLink to='/sign-up-vol'>Sign Up</NavBtnLink>}
          {userType === 'vol' && <NavBtnLink to='/profile'>Profile</NavBtnLink>}
          {userType === 'org' && <NavBtnLink to='/myevents'>Manage Events</NavBtnLink>}
        </NavBtn>
        <NavBtn>
          {userType === 'org' && <NavBtnLink to='/profile'>Profile</NavBtnLink>}
        </NavBtn>
        <NavBtn>
          {userType === null && <NavBtnLink to='/signin'>Sign In</NavBtnLink>}
          {userType != null && <NavBtnLink to='/' onClick = {signOut}>Sign Out</NavBtnLink>}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;