import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const AdminPage = () => {

  const [startPage, setStartPage] = useState('');
  const [endPage, setEndPage] = useState('');

  const changeStartPage = (e) => {
    setStartPage(e.target.value);
    console.log(startPage);
  }

  const changeEndPage = (e) => {
    setEndPage(e.target.value);
    console.log(endPage);
  }

  const daycareData = () => {
    let url;
  };

  return (
    <>
      <Form onSubmit={daycareData}>
        <Form.Control
          type="text"
          placeholder="시작 위치를 입력하세요"
          value = {startPage}
          onChange={changeStartPage}
        />
        <Form.Control
          type="text"
          placeholder="종료 위치를 입력하세요"
          value = {endPage}
          onChange={changeEndPage}
        />
      </Form>
    </>
  );
};

export default AdminPage;
