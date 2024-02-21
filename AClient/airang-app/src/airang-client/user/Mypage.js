import React, { useEffect, useState } from 'react';
import { getMyPage } from '../api/mypage';

const Mypage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyPage().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>로딩 중...</div>;
  return (
    <div>
      <div>{data?.username}</div>
      <div>{data?.email}</div>
    </div>
  );
};

export default Mypage;
