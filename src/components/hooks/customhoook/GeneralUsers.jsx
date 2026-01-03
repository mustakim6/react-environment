import React from 'react';

const GeneralUsers = ({userDetails}) => {
    return (
        <div className='UserInfoBox'>
            <h1>{userDetails?.name}</h1>
            <h2>From: {userDetails?.address.city}</h2>
            <h2>Email: {userDetails?.email}</h2>
            <h2>Web: {userDetails?.website}</h2>

        </div>
    );
};

export default GeneralUsers;