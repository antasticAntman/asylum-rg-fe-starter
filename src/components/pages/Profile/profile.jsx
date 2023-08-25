import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { colors } from '../../../styles/data_vis_colors';
const { primary_accent_color } = colors;

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '10px inset black',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div>
        <div className="profile-img">
          <img
            src={picture}
            alt="Profile"
            style={{
              border: `5px solid #404C4A`,
              borderRadius: '99px',
              height: '160px',
            }}
          />
        </div>
        <div
          style={{
            fontSize: '20px',
            marginTop: '4%',
            marginBottom: '0',
          }}
        >
          <h2>Profile Name: {name}</h2>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
