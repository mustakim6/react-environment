import React from 'react';

const GeneralUsers = ({userDetails}) => {
    return (
        <div>
            {userDetails?.name}
        </div>
    );
};

export default GeneralUsers;