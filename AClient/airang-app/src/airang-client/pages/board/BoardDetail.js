import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DetailPage = () => {
  
  let { id } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState({
    id: '',
    subject: '',
    user: '',
    content: '',
    viewCnt: 0,
    regDate: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/board/detail/' + id)
      .then((response) => response.json())
      .then((data) => setPost(data)); // ... 사용할 필요 없이 덮어쓰기 하면 됨
  }, []);

  const deletePost = () => {
    if(!window.confirm("삭제하시겠습니까?")) return;

    fetch("http://localhost:8080/board/delete/" + id, {
        method: "DELETE",
    })
    .then(response => response.text())
    .then(data => {
        if(parseInt(data) === 1) {
            alert("삭제 성공");
            navigate("/"); // 삭제 성공 후 '목록' 화면으로
        } else {
            alert("삭제 실패");
        }
    });
};


  return (
    <>
      <div className="container mt-3">

        <h2>조회 - {post.subject}</h2>
        <hr />

        <div className="mb-3 mt-3 clearfix">
          <span className="float-start me-2">id: {post.id}</span>
          <span className="float-end ms-4">작성일: {post.regDate}</span>
          <span className="float-end">조회수: {post.viewCnt}</span>
        </div>

        <section>
          <div className="mb-3">
            <label>작성자:</label>
            <span className="form-control">{post.user}</span>
          </div>

          <div className="mb-3 mt-3">
            <label>제목:</label>
            <span className="form-control">{post.subject}</span>
          </div>

          <div className="mb-3 mt-3">
            <label>내용:</label>
            <div
              className="border bg-light rounded p-2">{post.content}</div>
          </div>
        </section>

        <Link to={'/board/update/' + id} className="btn btn-outline-dark">
          수정
        </Link>
        <Link to={'/list'} className="btn btn-outline-dark ms-2">
          목록
        </Link>
        <Button variant="btn btn-outline-danger ms-2" onClick={deletePost}>
          삭제
        </Button>
        <Link to={'/board/write'} className="btn btn-outline-dark ms-2">
          작성
        </Link>

      </div>
    </>
  );
};

export default DetailPage;