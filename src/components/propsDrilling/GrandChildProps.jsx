import React from 'react';

const GrandChildProps = ({fruits}) => {
    return (
        <div className='border'>
            <h6>grandChild component, it print 3rd name of the food name array got as props from child-component.</h6>
            <h4>Third Fruit name is: {fruits[2] }</h4>
        </div>
    );
};

export default GrandChildProps;