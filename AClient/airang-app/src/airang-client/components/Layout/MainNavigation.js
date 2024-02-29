import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import { Button, Navbar } from 'react-bootstrap';
import { styled } from 'styled-components';

  const StyldedHeaderDiv = styled.div`
    margin: 15px;
    color: white;
  `;

const MainNavigation = () => {
  
  const authCtx = useContext(AuthContext);
  const [username, setUsername] = useState('');
  let isLogin = authCtx.isLoggedIn;
  let isGet = authCtx.isGetSuccess;

  const callback = (str) => {
    setUsername(str);
  };

  useEffect(() => {
    if (isLogin) {
      console.log('start');
      authCtx.getUser();
    }
  }, [isLogin]);

  useEffect(() => {
    if (isGet) {
      console.log('get start');
      callback(authCtx.userObj.username);
    }
  }, [isGet]);

  const toggleLogoutHandler = () => {
    console.log('logout');
    authCtx.logout();
  };

  return (
    <>
      <Navbar bg="info" data-bs-theme="dark" fixed='top'>
        <StyldedHeaderDiv>
          <Link to="/" className="navbar-brand">
            {/* 아이랑 */}
            <img src="resources/free-icon-baby-1580531.png" style={{width:'50px'}}/>
          </Link>
        </StyldedHeaderDiv>

        <StyldedHeaderDiv>
        {!isLogin && <Link to="/user/login" className='nav-link'>로그인</Link>}
        </StyldedHeaderDiv>

        <StyldedHeaderDiv>
        {!isLogin && <Link to="/user/register" className='nav-link'>회원가입</Link>}
        </StyldedHeaderDiv>

        {isLogin && <Button onClick={toggleLogoutHandler}>로그아웃</Button>}

      </Navbar>
    </>
  );
};

export default MainNavigation;
