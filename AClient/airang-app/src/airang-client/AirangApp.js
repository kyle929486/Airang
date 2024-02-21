import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import BoardWrite from './pages/board/BoardWrite';
import BoardList from './pages/board/BoardList';
import BoardDetail from './pages/board/BoardDetail';
import { Container } from 'react-bootstrap';
import Login from './user/Login';
import Logout from './user/Logout'
import Register from './user/Register';
import Mypage from './user/Mypage';

const AirangApp = () => {
  return (
    <>
      <Header/>
        <Container>
        <Routes>
          <Route path="/" Component={Main}></Route>
          <Route path="/user/login" Component={Login}></Route>
          <Route path="/user/logout" Component={Logout}></Route>
          <Route path="/user/register" Component={Register}></Route>
          {/* <Route path="/search" Component={Search}></Route>  */}
          {/*장소 검색*/}
          {/* <Route path="/search/list" Component={SearchList}></Route>  */}
          {/*장소 검색 결과*/}
          {/* <Route path="/search/detail/:id" Component={SearchDetail}></Route>  */}
          {/*장소 상세*/}
          {/* <Route path="/diary/list" Component={DiaryList}></Route>  */}
          {/*육아일기(리스트)*/}
          {/* <Route path="/diary/calendar" Component={DiaryCalendar}></Route> */}
          {/*육아일기(달력)*/}
          {/* <Route path="/diary/write" Component={DiaryWrite}></Route> */}
          {/*육아일기 작성*/}
          {/* <Route path="/diary/detail/:id" Component={DiaryDetail}></Route>  */}
          {/*육아일기 조회*/}
          {/* <Route path="/diary/update/:id" Component={DiaryUpdate}></Route>  */}
          {/*육아일기 수정*/}
          <Route path="/board/list" Component={BoardList}></Route>
          {/*게시판*/}
          <Route path="/board/write" Component={BoardWrite}></Route>
          {/*게시글 작성*/}
          <Route path="/board/detail/:id" Component={BoardDetail}></Route>
          {/*게시글 조회*/}
          {/* <Route path="/board/update/:id" Component={BoardUpdate}></Route>  */}
          {/*게시글 수정*/}
          <Route path="/user/mypage" Component={Mypage}></Route> {/*마이페이지*/}
          {/* <Route path="/mypage/review" Component={MyPageReview}></Route>  */}
          {/*리뷰 목록*/}
          {/* <Route path="/mypage/like" Component={MyPageLike}></Route>  */}
          {/*좋아요 목록*/}
        </Routes>
        </Container>
    </>
  );
};

export default AirangApp;
