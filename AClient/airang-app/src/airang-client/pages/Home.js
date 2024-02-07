import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/main");
    }, []);

    return (
        <div>
            <h1>메인으로 이동</h1>
        </div>
    );
};

export default Home;