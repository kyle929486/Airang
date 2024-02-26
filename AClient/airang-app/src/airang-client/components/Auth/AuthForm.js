import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import { Form, Input, Inputs, Title, Wrapper } from '../../components/Common';
import { Button } from 'react-bootstrap';

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
      navigate('/', { replace: true });
    }
  };

  return (
    <Wrapper>
      <Title>로그인</Title>

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

          {isLoading && <p>로딩 중</p>}
          
          <Button type="submit" className="btn btn-lg">
            로그인
          </Button>

          </Inputs>

        </form>

    </Wrapper>
  );
};

export default AuthForm;
