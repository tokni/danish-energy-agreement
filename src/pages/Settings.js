import React from 'react';
import AboutContainer from './styledComponents/AboutContainer';
import AboutHeader from './styledComponents/AboutHeader';
import AboutBody from './styledComponents/AboutBody';
import BodyLink from './styledComponents/BodyLink';
import { Link } from 'react-router-dom';

export default () => (
  <AboutContainer>
    <AboutHeader>Settings</AboutHeader>
    <AboutBody>Here you will soon be able to select which charts to show and make other settings.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
      in culpa qui officia deserunt mollit anim id est laborum.</AboutBody>
    <AboutBody>Read more at <BodyLink href='http://www.tokni.com'>www.tokni.com</BodyLink>.</AboutBody>
    <AboutBody><Link to='/'>Go back to the main page</Link></AboutBody>
  </AboutContainer>
)
