import React, { useMemo, useState } from 'react';

const addTwoNumber = ({a, b})=>{
    console.log('add run');
 return a+b;
}

const ReactUsememo = () => {
const [input, setInput] = useState({})
const handleResult = ()=>{
    setInput({a:6,b:4})
}
    const result = useMemo( ()=>{
        
      return  addTwoNumber(input)
    }, [input])
    // const result = addTwoNumber(input)

    const updateResult = result+10;


    return (
        <div>
            <h1>Updated Result: {updateResult}</h1>
            <h3>{result}</h3>
            <button onClick={handleResult}>show result</button>
        </div>
    );
};

export default ReactUsememo;