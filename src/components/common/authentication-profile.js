import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const AuthenticationProfile = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Link
      to="/profile"
      style={{
        color: '#E2F0F7',
        paddingLeft: '75px',
      }}
    >
      Profile
    </Link>
  ) : (
    <></>
  );
};

export default AuthenticationProfile;
