import axios from "axios";

export const getMyPage = async () => {

    const type = localStorage.getItem('type')
    const access = localStorage.getItem('access');

    const result = await axios.get('http://localhost:8080/user/mypage', {
        headers:{
            Authorization: 'Bearer ' + access
        },
    });
    return result.data;
    
};