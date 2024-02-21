import {createSlice} from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 600*1000;

// createSlice()
// 리듀서 함수의 객체, 슬라이스 이름, 초기 상태 값을 받아들이고 
// 해당 액션 생성자와 액션 유형으로 슬라이스 리듀서를 자동으로 생성
export const tokenSlice = createSlice({
    name: 'authToken',
    initialState: {
        authenticated: false, // 로그인 여부
        accessToken: null, // Access Token 저장
        expireTime: null // Access Token 만료 시간
    },
    reducers: {
        SET_TOKEN: (state, action) => {
            state.authenticated = true;
            state.accessToken = action.payload; // action.payload : 해당 액션과 같이 전달하는 값
            state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
        },
        DELETE_TOKEN: (state) => {
            state.authenticated = false;
            state.accessToken = null;
            state.expireTime = null
        }
    }
})

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;