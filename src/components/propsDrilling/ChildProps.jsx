import React from 'react';
import GrandChildProps from './GrandChildProps';

const ChildProps = ({fruits}) => {
    return (
        <div className='border'>
            <h6>child component, it print 2nd name of the food-name array got as props from parent-component.</h6>
            <h4>Second Fruit name is : {fruits[1]}</h4>
            <GrandChildProps fruits={fruits}></GrandChildProps>
        </div>
    );
};

export default ChildProps;