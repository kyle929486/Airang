import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AdminPage = () => {

  const [startPage, setStartPage] = useState('');
  const [endPage, setEndPage] = useState('');

  const changeStartPage = (e) => {
    setStartPage(e.target.value);
  };

  const changeEndPage = (e) => {
    setEndPage(e.target.value);
  };

  const daycareData = (e) => {
    e.preventDefault();

    if (startPage === '' || endPage === '') {
      alert('필수 입력 항목입니다');
    } else {
      fetch(`http://localhost:8080/api/daycare/${startPage}/${endPage}`, {
        method: 'GET',
      })
        .then((response) => response.text())
        .then((data) => {
          if (parseInt(data) >= 200 && parseInt(data) <= 300) {
            alert('다운로드 성공');
          } else {
            alert('다운로드 실패');
          }
        });
    }
  };

  return (
    <>
      <div className="container mt-3">
        <h2>어린이집 데이터</h2>
        <hr />

        <Form onSubmit={daycareData}>
          <Form.Control
            className="mb-3 mt-3"
            type="text"
            placeholder="시작 위치를 입력하세요"
            value={startPage}
            onChange={changeStartPage}
          />

          <Form.Control
            className="mb-3 mt-3"
            type="text"
            placeholder="종료 위치를 입력하세요"
            value={endPage}
            onChange={changeEndPage}
          />

          <div className="d-flex">
            <Button variant="btn btn-outline-dark ms-1" type="submit">
              다운로드
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AdminPage;
