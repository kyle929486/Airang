import React, { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import { Form, Input, Inputs, Title, Wrapper } from '../Common';
import { Button } from 'react-bootstrap';

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
      return navigate('/', { replace: true });
    }
  };

  return (
    <Wrapper>
      <Title>회원가입</Title>

      <form onSubmit={submitHandler}>

        <Inputs>

          {/* <label htmlFor='username'>Your username</label> */}
          <Input
            type="username"
            placeholder="아이디"
            required
            ref={usernameInputRef}
          />

          {/* <label htmlFor="password">Your password</label> */}
          <Input
            type="password"
            placeholder="비밀번호"
            required
            ref={passwordInputRef}
          />

          {/* <label htmlFor='email'>Your email</label> */}
          <Input
            type="email"
            placeholder="이메일"
            required
            ref={emailInputRef}
          />

          <Button type="submit" className="btn btn-lg">
            가입하기
          </Button>

        </Inputs>

      </form>

    </Wrapper>
  );
};

export default CreateAccountForm;
