import React from 'react';

import { useSelector } from 'react-redux';

const Settings = () => {

    const { currentUser } = useSelector(state => state.user);

    console.log(currentUser)

  return (
    <div>Settings</div>
  );
};

export default Settings;
