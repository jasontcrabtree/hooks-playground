import React, { useState } from 'react';

function LoginFormObjectState() {
  const [form, setFormState] = useState({
    username: '',
    password: '',
  });

  function printValues(e) {
    e.preventDefault();
    console.log(form.username, form.password);
  }

  function updateField(e) {
    setFormState({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <h3>Login Form with Object State</h3>
      <form onSubmit={printValues}>
        <label htmlFor="username">
          Username:
          <br />
          <input
            type="text"
            autoComplete="off"
            name="username"
            value={form.username}
            onChange={updateField}
          />
        </label>
        <br />
        <br />
        <label htmlFor="password">
          Password:
          <br />
          <input
            type="password"
            autoComplete="off"
            name="password"
            value={form.password}
            onChange={updateField}
          />
        </label>
        <br />
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default LoginFormObjectState;
