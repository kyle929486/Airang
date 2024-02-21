import axios from "axios";

export const login = async (id, pw) => {
    const result = await axios.post('http://localhost:8080/user/login', {id, pw});
    return result.data;
};