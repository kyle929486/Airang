import React, { useContext } from 'react';
import SearchContext from '../../store/search-context';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainDiv = styled.div`
  margin: 15vh;
  text-align: center;
`;

const Search = () => {
  const ctx = useContext(SearchContext);
  const navigate = useNavigate();

  const chooseCategory = (e) => {
    ctx.category = e.target.title;
    navigate(`/search/list`);
  };

  return (
    <MainDiv>

      <h3>어떤 보육 시설을 찾아볼까요?</h3>
      <br/><br/><br/><br/>
      <div style={{ display: 'inline' }}>
        <img
          src="resources/free-icon-daycare-12899182.png"
          title="어린이집"
          alt="어린이집"
          onClick={chooseCategory}
          style={{ width: '30vh' }}
        />
        <img
          src="resources/free-icon-hobbies-2853386.png"
          title="체험 시설"
          alt="체험 시설"
          onClick={chooseCategory}
          style={{ width: '30vh' }}
        />
      </div>
    </MainDiv>
  );
};

export default Search;
