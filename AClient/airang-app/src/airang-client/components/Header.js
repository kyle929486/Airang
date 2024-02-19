import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyldedHeaderDiv = styled.div`
  margin: 15px;
`;

const Header = () => {
  return (
    <>
      <Navbar bg="info" data-bs-theme="dark">
        <StyldedHeaderDiv>
          <Link to="/" className="navbar-brand">
            아이랑
          </Link>
        </StyldedHeaderDiv>

          <Link to="/user/login" className="navbar-brand">
            로그인
          </Link>
      </Navbar>
    </>
  );
};

export default Header;
