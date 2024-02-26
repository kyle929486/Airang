import { GET, POST } from "./fetch-auth-action";

// 토큰 생성
const createTokenHeader = (token) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };
};

// 토큰 만료 시간 계산
const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
};

// 토큰과 만료 시간을 받으면 localStorage에 저장
// 남은 시간 반환
export const loginTokenHandler = (token, expirationTime) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', String(expirationTime));

    const remainingTime = calculateRemainingTime(expirationTime);
    return remainingTime;
};

// localStorage 내부에 토큰이 존재하는지 검섹
export const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime') || '0';
    
    const remaingTime = calculateRemainingTime(+ storedExpirationDate);

    if (remaingTime <= 1000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }
    
    return {
        token: storedToken,
        duration: remaingTime
    };
};

// POST 방식으로 회원가입 URL 호출
export const signupActionHandler = (username, password, email) => {
    const URL = 'http://localhost:8080/user/register';
    const signupObject = { username, password, email };
    const response = POST(URL, signupObject, {});
    return response;
};

// POST 방식으로 로그인 URL 호출
export const loginActionHandler = (username, password) => {
    const URL = 'http://localhost:8080/user/login';
    const loginObject = { username, password };
    const response = POST(URL, loginObject, {});
    return response;
};

// 로그아웃
// localStorage에 저장된 토큰과 만료 시간 삭제
export const logoutActionHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
};

// 유저 정보를 GET 방식으로 호출
// 토큰 값을 헤더에 넣고 호출
export const getUserActionHandler = (token) => {
    const URL = 'http://localhost:8080/user/mypage';
    const response = GET(URL, createTokenHeader(token));
    return response;
};
