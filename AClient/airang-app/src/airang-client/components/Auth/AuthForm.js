import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const AuthForm = () => {

    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const authCtx = useContext(AuthContext);

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);
        authCtx.login(enteredUsername, enteredPassword);
        setIsLoading(false);

        if (authCtx.isSuccess) {
            navigate("/", { replace: true });
        }

    };

    return (
        <section>
          <h1>Login</h1>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor='username'>Your username</label>
              <input type='username' id='username' required ref={usernameInputRef}/>
            </div>
            <div>
              <label htmlFor="password">Your password</label>
              <input type='password' id='password' required ref={passwordInputRef}/>
            </div>
            <div>
              <button type='submit'>Login</button>
              {isLoading && <p>Loading</p>}
              <p>Create Account</p>
            </div>
          </form>
        </section>
      );
};

export default AuthForm;
