import React from 'react';
import { styled } from 'styled-components';

const MainDiv = styled.div`
  margin: 15px;
  text-align: center;
  
  .map {
      width: 100%;
  }

`;

const Main = () => {
    return (
        <MainDiv>
            <h3>우리 동네에 어떤 보육 시설이 있는지</h3>
            <h3>찾아볼까요?</h3>

            <img className='map' src='resources/지도_서울.jpg'/>

        </MainDiv>
    );
};

export default Main;