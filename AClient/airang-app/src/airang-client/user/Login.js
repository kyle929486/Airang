import React, { useState } from 'react';
import { Form, Input, Inputs, Title, Wrapper } from '../components/Common.js';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../api/login.js';
import { loginUser } from '../api/Users.js';
import { setRefreshToken } from '../store/Cookie.js';
import { SET_TOKEN } from '../store/Auth.js';

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
    text-decoration: none;
  }
`;

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [auth, setAuth] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const changeValue = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  // const onClick = async () => {
  //   const result = await login(id, pw);
  //   console.log(result);
  //   const { accessToken, refreshToken } = result;
  //   localStorage.setItem('access', accessToken);
  //   localStorage.setItem('refresh', refreshToken);
  //   navigate('/user/mypage')
  // };

  const onClick = () => {
    fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(auth),
    })
      .then((response) => {
        console.log(`response`, response);

        if (response.status === 200) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data !== null) {
          const { accessToken, refreshToken } = data;
          localStorage.setItem('access', accessToken);
          setRefreshToken(refreshToken);
          alert('로그인 성공');
          navigate(`/user/mypage`);
        } else {
          alert('로그인 실패');
        }
      });
  };

  const onValid = async () => {

    console.log(auth);
    const username = auth.username;
    const password = auth.password;

    console.log(username);
    console.log(password);
    const response = await loginUser({username, password});

    console.log(response);

    if (response.status) {
      // 쿠키에 Refresh Token, store에 Access Token 저장
      setRefreshToken(response.json.refreshToken);
      dispatch(SET_TOKEN(response.json.accessToken));

      return navigate(`/`);
    } else {
      console.log(response.json);
    }

  };

  return (
    <Wrapper>
      <Title>로그인</Title>
      <Form>
        <Inputs>
          <Input
            placeholder="아이디"
            // value={id}
            name="username"
            onChange={changeValue}
          />
          <Input
            placeholder="비밀번호"
            type="password"
            // value={pw}
            name="password"
            onChange={changeValue}
          />
        </Inputs>
        <Button onClick={onValid}>로그인</Button>
      </Form>
      <CustomLink to="/user/register">회원가입</CustomLink>
    </Wrapper>
  );
};

export default Login;
