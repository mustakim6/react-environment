import React, { useState } from 'react';
import  '../../App.css'
import ChildComponent from './ChildComponent';

const ParentCompnent = () => {
    const [count, setcount] = useState(0)
    console.log('ParentComponent rendering');


    return (
        <div className='parentBox'>
            <p>parent Component</p>
            <h4>count: {count}</h4>
            <button onClick={()=>setcount(prev=>prev+1)}>Click</button>

            <ChildComponent></ChildComponent>

        </div>
    );
};

export default ParentCompnent;