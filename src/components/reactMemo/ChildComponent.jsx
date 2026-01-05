import React from 'react';

const ChildComponent = () => {
    console.log('ChildComponent rendering');
    return (
        <div className='childBox'>
            <h4>Im child component</h4>
            
        </div>
    );
};

export default React.memo(ChildComponent);