import React from 'react';

import Profile from './profile';

function ProfileContainer() {
  return (
    <div
      style={{
        // marginTop: '270px',
        // marginLeft: '270px',
        // marginRight: '270px',
        margin: '270px 270px 0px 270px',
        position: 'sticky',
        height: '100vh',
      }}
    >
      <Profile />
    </div>
  );
}

export default ProfileContainer;
