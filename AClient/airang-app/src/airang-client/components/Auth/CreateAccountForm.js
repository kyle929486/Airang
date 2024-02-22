import React, { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const CreateAccountForm = () => {

    let navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const emailInputRef = useRef(null);

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        authCtx.signup(enteredUsername, enteredPassword, enteredEmail);
        if (authCtx.isSuccess) {
            return navigate("/", { replace: true });
        }
    };

    return (
        <section>
          <h1>Create Account</h1>
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
              <label htmlFor='email'>Your email</label>
              <input type='email' id='email' required ref={emailInputRef}/>
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </section>
      );
    };

export default CreateAccountForm;
