import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { colors } from '../../styles/data_vis_colors';

const { primary_accent_color } = colors;

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      style={{
        backgroundColor: primary_accent_color,
        color: 'white',
        border: primary_accent_color,
        width: '85px',
      }}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
