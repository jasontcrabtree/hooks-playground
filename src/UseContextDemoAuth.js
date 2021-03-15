/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/*
https://dev.to/curtiscodes/learn-to-usecontext-with-hooks-in-3-minutes-4c4g

1. Initiating context is super easy. We create a variable and set it to createContext().
2. Creating a function to provide our initiated context is the most complicated part.
2a. We're going to call a provider function with children as a prop. This function will be the parent of every other component in our app.
3. Context is a global variable. We implement it at the highest level in our app (where React renders our app).
4. From here on out, we're going to be consuming context (i.e. using and updating it).
4a. AuthApp.js and UnauthApp.js similarly import the user context, and also methods to update the user context.
*/

import React, { useState } from 'react';

// @function  UserContext
export const UserContext = React.createContext({ name: '', auth: false });

const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ name: '', auth: true });

  // Login updates the user data with a name parameter
  const login = (name) => {
    setUser((user) => ({
      name,
      auth: true,
    }));
  };

  const logout = () => {
    setUser((user) => ({
      name: '',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
