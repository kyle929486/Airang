import React, { useState } from 'react';

const AdminPage = () => {
  const api_key = '61585143796b796c34337158596c56';

  const [values, setValues] = useState([]);

  const [daycare, setDaycare] = useState({
    id: '',
    sigun: '',
    name: '',
    type: '',
    status: '',
    address: '',
    phoneNum: '',
    homepage: '',
    playgroundCnt: 0,
    cctvCnt: 0,
    schoolBus: '',
    service: '',
  });

  const daycareData = () => {
    let url;

    url = `http://openapi.seoul.go.kr:8088/${api_key}/json/ChildCareInfo/1/1000`;
    fetch(url)
      .then((response) => response.json())
      .then((jsonObj) => parseJSON(jsonObj));
  };

  const parseJSON = (jsonObj) => {

    let array = jsonObj.ChildCareInfo.row;

    
        setDaycare({
        ...daycare,
        sigun: array[0].SIGUNNAME,
        name: array[0].CRNAME,
        type: array[0].CRTYPENAME,
        status: array[0].CRSTATUSNAME,
        address: array[0].CRADDR,
        phoneNum: array[0].CRTELNO,
        homepage: array[0].CRHOME,
        playgroundCnt: array[0].PLGRDCO,
        cctvCnt: array[0].CCTVINSTLCNT,
        schoolBus: array[0].CRCARGBNAME,
        service: array[0].CRSPEC,
      })


    // jsonObj.ChildCareInfo.row.forEach(row => {
    
    //   setDaycare({
    //     ...daycare,
    //     sigun: row.SIGUNNAME,
    //     name: row.CRNAME,
    //     type: row.CRTYPENAME,
    //     status: row.CRSTATUSNAME,
    //     address: row.CRADDR,
    //     phoneNum: row.CRTELNO,
    //     homepage: row.CRHOME,
    //     playgroundCnt: row.PLGRDCO,
    //     cctvCnt: row.CCTVINSTLCNT,
    //     schoolBus: row.CRCARGBNAME,
    //     service: row.CRSPEC,
    //   })

    // });
    
};

console.log(daycare);




  

  return (
    <div>
      <button type="button" onClick={daycareData}>
        test
      </button>
    </div>
  );
};

export default AdminPage;
