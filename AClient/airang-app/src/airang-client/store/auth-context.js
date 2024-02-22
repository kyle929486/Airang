import React, { useState, useEffect, useCallback } from "react";
import * as authAction from './auth-action';

let logoutTimer;

// createContext는 각각의 컴포넌트에 포함되는 객체를 만드는 로직
// 객체 안에는 state와 state를 컨트롤 하는 함수를 넣는다
const AuthContext = React.createContext({
    token: '',
    userObj: { username: '', email: '' },
    isLoggedIn: false,
    isSuccess: false,
    isGetSuccess: false,
    signup: (username, password, email) => { },
    login: (username, password) => { },
    logout: () => { },
    getUser: () => { }
});

// Context의 Provider 역할, 즉 Context의 변화를 알리는 Provider 컴포넌트를 반환하는 함수
// Provider의 value로는 생성하거나 로직을 구현한 state와 함수들을 넣어주고, props.children을 통해 wrapping될 모든 컴포넌트에게 적용되게 한다
export const AuthContextProvider = (props) => {

    // tokenData는 authAction.retrieveStoredToken을 통해 token을 확인하는 함수를 실행하여 안의 값을 넣어준다
    const tokenData = authAction.retrieveStoredToken();
    let initialToken;

    // 만약 존재하게 된다면 initialToken의 값은 tokenData의 token 값이 된다
    if (tokenData) {
        initialToken = tokenData.token;
    }

    // 여기서 다시 token을 token이라는 상태에 넣어준다
    const [token, setToken] = useState(initialToken);
    
    // userObj는 사용자의 정보를 담기 위한 객체
    const [userObj, setUserObj] = useState({
        username: '',
        email: ''
    });

    // isSuccess와 isGetsuccess는 정확히 데이터가 나왔는지, 비동기 시스템에서의 처리를 위한 상태
    const [isSuccess, setIsSuccess] = useState(false);
    const [isGetSuccess, setIsGetSuccess] = useState(false);

    // userIsLoggedIn은 반환하는 boolean값이며, token이 존재하냐 안하냐에 따라 값이 변한다
    const userIsLoggedIn = !!token;

    // 회원가입 함수
    // form에서 username, password, email을 받아 auth-action의 signupActionHandler에 넣어준다
    // 이후 리턴된 Promise 객체인 response를 비동기 처리
    // Promise 내부의 result가 null이 아닐 경우(즉 error가 없을 경우), isSuccess의 상태를 변화시켜서 성공했음을 나타낸다
    const signupHandler = (username, password, email) => {

        setIsSuccess(false);
        const response = authAction.signupActionHandler(username, password, email);
        response.then((result) => {
            if (result !== null) {
                setIsSuccess(true);
            }
        });
    };

    // 로그인 함수
    // auth-action의 loginActionHandler에서 받아온 데이터로부터 토큰을 추출
    // 전역상태에 token의 값을 설정
    // logoutTimer에 setTimeout을 통해 만료 시간이 지나면 logoutHandler를 통해 로그아웃
    // 만료 시간은 auth-action의 loginTokenHandler에 토큰과 토큰 만료일을 넣고 반환된 값을 기준으로 함
    const loginHandler = (username, password) => {
        setIsSuccess(false);
        console.log(isSuccess);

        const data = authAction.loginActionHandler(username, password);
        data.then((result) => {
            if (result !== null) {
                const loginData = result.data;
                setToken(loginData.accessToken);
                logoutTimer = setTimeout(
                    logoutHandler, 
                    authAction.loginTokenHandler(loginData.accessToken, loginData.tokenExpiresIn));
                setIsSuccess(true);
                console.log(isSuccess);
            }
        });
    };

    // 로그아웃 함수
    // useEffect를 통해 토큰이 없어지면 자동으로 로그아웃을 실행하게 할 것이므로, 무한루프를 막기 위해 useCallback으로 감싸준다
    // 이후 token 상태를 빈 값으로 만들어주고, auth-action의 logoutActionHandler로 localStorage의 토큰 값을 지우게 만듦
    // logoutTimer가 존재한다면 Timer 또한 지워준다
    const logoutHandler = useCallback(() => {
        setToken('');
        authAction.logoutActionHandler();
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    // auth-action의 getUserActionHandler에 전역 상태에 있는 token의 값을 넣어주고 Promise객체인 data를 받는다
    // 이후 data가 null이 아닐 경우 안의 객체를 뽑아내, userObj 상태에 객체를 넣는다
    const getUserHandler = () => {
        setIsGetSuccess(false);
        const data = authAction.getUserActionHandler(token);
        data.then((result) => {
            if (result !== null) {
                console.log('get user start!');
                const userData = result.data;
                setUserObj(userData);
                setIsGetSuccess(true);
            }
        });
    };

    // auth-action의 retrieveStoredToken으로 받은 token 값과, logoutHandler를 종속변수로 삼는 useEffect 훅
    // 이를 통해 만료시간이 될 경우 자동으로 logoutHandler를 실행
    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duration);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        token,
        userObj,
        isLoggedIn: userIsLoggedIn,
        isSuccess,
        isGetSuccess,
        signup: signupHandler,
        login: loginHandler,
        logout: logoutHandler,
        getUser: getUserHandler
    };

    return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;