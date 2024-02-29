import React from 'react';

const DaycareList = (props) => {

    const {id, name, type, address, service} = props.daycare;


    return (
        <>
            <tr>
                <td><span>{name}</span></td>
                <td><span>{type}</span></td>
                <td><span>{address}</span></td>
                <td><span>{service}</span></td>
            </tr>
        </>
    );

};

export default DaycareList;