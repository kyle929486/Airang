import axios from 'axios';

// 자주 쓰이는 GET, POST, PUT, DELETE를 각각 메소드로 분리
// 에러를 catch하는 부분만 따로 추상화 해서, 제시되는 메소드 변수에 따라 다른 로직이 구현되도록 함

const fetchAuth = async (fetchData) => {

    const method = fetchData.method;
    const url = fetchData.url;
    const data = fetchData.data;
    const header = fetchData.header;

    try {
        const response = (method === 'get' && (await axios.get(url, header))) ||
            (method === 'post' && (await axios.post(url, data, header))) ||
            (method === 'put' && (await axios.put(url, data, header))) ||
            (method === 'delete' && (await axios.delete(url, header)));
        if (response && response.data.error) {
            console.log(response.data.error);
            alert("Wrong ID or Password");
            return null;
        }
        if (!response) {
            alert("false!");
            return null;
        }
        return response;
    }

    catch (err) {
        if (axios.isAxiosError(err)) {
            const serverError = err;
            if (serverError && serverError.response) {
                console.log(serverError.response.data);
                alert("failed!");
                return null;
            }
        }
        console.log(err);
        alert("failed!");
        return null;
    }
};

const GET = (url, header) => {
    const response = fetchAuth({ method: 'get', url, header });
    return response;
};
const POST = (url, data, header) => {
    const response = fetchAuth({ method: 'post', url, data, header });
    return response;
};
const PUT = async (url, data, header) => {
    const response = fetchAuth({ method: 'put', url, data, header });
    return response;
};
const DELETE = async (url, header) => {
    const response = fetchAuth({ method: 'delete', url, header });
    return response;
};

export { GET, POST, PUT, DELETE };