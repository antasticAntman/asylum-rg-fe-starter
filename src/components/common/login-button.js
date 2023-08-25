import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { colors } from '../../styles/data_vis_colors';

const { primary_accent_color } = colors;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      style={{
        backgroundColor: primary_accent_color,
        color: 'white',
        border: primary_accent_color,
        width: '85px',
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;
