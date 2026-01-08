import React, { useCallback, useState } from 'react';
import GetGreetings from './GetGreetings';
import ReactUsememo from './ReactUsememo';

const ReactUseCallback = () => {
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)
    console.log('usecallback run');

    // const getGreetings = ()=> { 
    //         return `Hello ${name}!`;
    // }
    const getGreetings = useCallback(()=> { 
            return `Hello ${name}!`;
    }, [name])

    return (
        <div>
            <h4><u>UseCallback</u></h4>
            <h5>useCallback is a React Hook that memoizes a function so React doesn’t create a new function on every render.</h5>
            <input 
            type="text" 
            name="" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="" />

            <GetGreetings  getGreetings={getGreetings}></GetGreetings>
            <h3>{count}</h3>      
            <button onClick={()=>setCount(prev=>prev+1)}>click+1</button>


{/* react usememo */}
<ReactUsememo></ReactUsememo>

        </div>
    );
};

export default ReactUseCallback;