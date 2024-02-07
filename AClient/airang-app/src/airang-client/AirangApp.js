import React from "react";

const AirangApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route> {/*/main으로 리다이렉트*/}
      </Routes>
    </>
  );
};

export default AirangApp;
