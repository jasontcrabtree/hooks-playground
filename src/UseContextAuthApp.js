import React, { useContext } from 'react';
import { UserContext } from './UseContextDemoAuth';

function AuthApp() {
  const { user, logout } = useContext(UserContext);
  return (
    <>
      <h1>Howdy{!user.length > 0 ? `, ${user.name}!` : ''}</h1>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </>
  );
}

export default AuthApp;
