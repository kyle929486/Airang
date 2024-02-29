import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import DaycareList from '../../components/DaycareList';
import SearchContext from '../../store/search-context';

  const MainDiv = styled.div`
    margin: 8vh;
    text-align: center;
  `;

const SearchList = () => {
  const ctx = useContext(SearchContext);
  const daycareRef = useRef(null);
  const facilityRef = useRef(null);
  const [daycareList, setDaycareList] = useState([]);


  useEffect(() => {

    let sigun = ctx.sigun;

    if (ctx.category === '어린이집') {
      facilityRef.current.style = `display: none`;

      fetch('http://localhost:8080/search/list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: sigun,
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDaycareList(data);
      });

    } else if (ctx.category === '체험 시설') {
      daycareRef.current.style = `display: none`;
    }
  }, []);

  return (
    <MainDiv>

      <div className="container mt-3">

        <h2>
          '{ctx.sigun} {ctx.category}'에 대한 검색 결과예요
        </h2>
        <hr />

        <div ref={daycareRef}>
          <table className="table table-hover">
            <thead className="table-info">
              <tr>
                <th>이름</th>
                <th>유형</th>
                <th>주소</th>
                <th>제공 서비스</th>
              </tr>
            </thead>

            <tbody>
                {daycareList.map((daycare) => (
                <DaycareList key={daycare.id} daycare={daycare} />
            ))}
            </tbody>
          </table>
        </div>

        <div ref={facilityRef}>
          <table className="table table-hover">
            <thead className="table-info">
              <tr>
                <th>이름</th>
                <th>연령</th>
                <th>주소</th>
                <th>무료 여부</th>
              </tr>
            </thead>

            <tbody>
              {/* {facilityList.map((facility) => (
              <FacilityList key={facility.id} facility={facility} />
            ))} */}
            </tbody>
          </table>
        </div>

        <div className='col-12'>
            <Link to={"/"} className='btn btn-primary'>돌아가기</Link>
        </div>
        
      </div>    

    </MainDiv>
  );
};

export default SearchList;
