import React, { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function printValues(e) {
        e.preventDefault();
        console.log(username, password)
    }

    return (
     <div>
         <h3>Login Form</h3>
            <form onSubmit={printValues}>
                <label>
                    Username{' '}
                    <input type="text" autocomplete="off" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
                </label>
                <br />
                <br/>
                <label>
                    Password{' '}
                    <input name="password" autocomplete="off" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <br />
                <br/>
                <button>Submit</button>
            </form>
     </div>
    );
}

export default LoginForm;
