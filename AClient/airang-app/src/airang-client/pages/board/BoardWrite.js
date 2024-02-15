import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BoardWrite = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    id: '',
    subject: '',
    user: '',
    content: '',
    viewCnt: 0,
    regDate: '',
  });

  // const [files, setFiles] = useState([]);

  // const handleFilesChange = (e) => {
  //   setFiles(Array.from(e.target.files));
  // };

  // const uploadFiles = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();

  //   files.map((file) => {
  //     formData.append('files', file);
  //   });

  //   console.log(Array.from(formData));

  //   axios
  //     .post('http://localhost:8080/file/uploads', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  const changeValue = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const submitPost = (e) => {
    e.preventDefault();

    if (post.subject === '' || post.content === '' || post.user === '') {
      alert('필수 입력 항목입니다');
    } else {
      fetch('http://localhost:8080/board/write', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(post),
      })
        .then((response) => {
          console.log(`response`, response);

          if (response.status === 201) {
            // 201 CREATED인 경우 성공
            return response.json();
          } else {
            return null;
          }
        })
        .then((data) => {
          if (data !== null) {
            alert('등록 성공');
            navigate(`/board/detail/${data.id}`);
          } else {
            alert('등록 실패');
          }
        });
    }
  };

  return (
    <>
      <div className="container mt-3">
        <h2>작성</h2>
        <hr />

        <Form onSubmit={submitPost}>
          <Form.Group className="mb-3">
            <Form.Label>작성자</Form.Label>
            <Form.Control
              type="text"
              placeholder="작성자를 입력하세요"
              onChange={changeValue}
              name="user"
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-3">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              placeholder="제목을 입력하세요"
              onChange={changeValue}
              name="subject"
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-3">
            <Form.Label>내용</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="내용을 입력하세요"
              onChange={changeValue}
              name="content"
            />
          </Form.Group>

          {/* <Form.Group>
            <input
              className="file-input"
              type="file"
              onChange={handleFilesChange}
            />
            <Button onClick={uploadFiles}>upload</Button>
          </Form.Group> */}

          <div className="d-flex">
            <Button variant="btn btn-outline-dark ms-1" type="submit">
              작성완료
            </Button>

            <Link to={'/list'} className="btn btn-outline-dark ms-1">
              목록
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default BoardWrite;
