import React, { useState, useContext } from 'react';
import { UserContext } from './UseContextDemoAuth';

function UnauthApp() {
  const { login } = useContext(UserContext);
  const [name, setName] = useState();

  return (
    <>
      <h1>Log in to view</h1>
      <fieldset>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="button" onClick={() => login(name)}>
            Log in
          </button>
        </label>
      </fieldset>
    </>
  );
}

export default UnauthApp;
