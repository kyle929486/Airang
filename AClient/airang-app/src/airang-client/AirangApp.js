import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import BoardWrite from './pages/board/BoardWrite';
import BoardList from './pages/board/BoardList';
import BoardDetail from './pages/board/BoardDetail';
import { Container } from 'react-bootstrap';
import Login from './pages/user/Login';
import Logout from './pages/user/Logout'


import Layout from './components/Layout/Layout';
import CreateAccountPage from './pages/CreateAccountPage';
import AuthPage from './pages/AuthPage';
import AuthContext from './store/auth-context';

const AirangApp = () => {

  // const authCtx = useContext(AuthContext);

  return (
    <>
      <Header/>
      {/* <Layout> */}
        <Container>
        <Routes>

        {/* <Route path="/" element={<Main />} />
        <Route path="/user/register/" element={authCtx.isLoggedIn ? <Navigate to='/' /> : <CreateAccountPage />} />
        <Route path="/user/login/*" 
          element={authCtx.isLoggedIn ? <Navigate to='/' /> : <AuthPage />}
        /> */}

          <Route path="/" Component={Main}></Route>
          <Route path="/user/login" Component={Login}></Route>
          <Route path="/user/logout" Component={Logout}></Route>
          {/* <Route path="/user/register" Component={Register}></Route> */}


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
          <Route path="/board/write" Component={BoardWrite}></Route>
          <Route path="/board/detail/:id" Component={BoardDetail}></Route>
          {/* <Route path="/board/update/:id" Component={BoardUpdate}></Route>  */}
 
          {/* <Route path="/user/mypage" Component={Mypage}></Route> */}
          {/* <Route path="/mypage/review" Component={MyPageReview}></Route>  */}
          {/*리뷰 목록*/}
          {/* <Route path="/mypage/like" Component={MyPageLike}></Route>  */}
          {/*좋아요 목록*/}

        </Routes>
        </Container>
      {/* </Layout> */}
    </>
  );
};

export default AirangApp;
