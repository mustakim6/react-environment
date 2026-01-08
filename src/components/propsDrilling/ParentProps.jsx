import React from 'react';
import ChildProps from './ChildProps';

const ParentProps = ({fruits}) => {
    return (
        <div className='border'>
            <h6>parent component, it print 1st name of the food-name array got as props from container component.</h6>
            <h2>First fruit name is {fruits[0]}</h2>
            <ChildProps fruits={fruits}></ChildProps>
        </div>
    );
};

export default ParentProps;