import React, { useEffect, useState } from 'react';
import PostList from '../../components/PostList';
import { Link } from 'react-router-dom';

const BoardList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/board/list')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <>

      <div className="container mt-3">
        <h2>목록</h2>
        <hr />

        <table className="table table-hover">

          <thead className="table-success">

            <tr>
              <th>#</th>
              <th>제목</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>작성일</th>
            </tr>

          </thead>

          <tbody>
            {posts.map((post) => (<PostList key={post.id} post={post} />))}
          </tbody>

        </table>

        <div className='col-12'>
            <Link to={"/board/write"} className='btn btn-outline-dark'>작성</Link>
        </div>

      </div>

    </>
  );
};

export default BoardList;