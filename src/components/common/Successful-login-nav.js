import React from 'react';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import Profile from '../pages/Profile/profile';
import ProfileContainer from '../pages/Profile/ProfileContainer';
import LogoutButton from './logout-button';

const SuccessfulLogin = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link
        to="/profile"
        style={{
          color: '#E2F0F7',
          paddingLeft: '15px',
          paddingRight: '15px',
          marginRight: '25px',
        }}
      >
        Profile
      </Link>
      <LogoutButton />
    </div>
  );
};

export default SuccessfulLogin;
