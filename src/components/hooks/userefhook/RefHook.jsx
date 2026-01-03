import React, { useEffect, useRef, useState } from 'react';

const RefHook = () => {

   
    const [inputValue, setInputValue] = useState('')
    // const [tag, setTag] = useState()
   const storevalueBtwinTwoRenders = useRef(0)
   const getDomElemAccess = useRef(null)
   const trackPreviousStateValue = useRef('')

   
      useEffect(()=>{
        storevalueBtwinTwoRenders.current = storevalueBtwinTwoRenders.current + 1;
      
      })

      useEffect(()=>{
        console.log(getDomElemAccess.current);
        
        
      },[])
      
      useEffect(()=>{
            trackPreviousStateValue.current = inputValue
      },[inputValue])

    return (
        <div>
            <h4>useRef is a React Hook that lets you persist a mutable value across renders without causing a re-render.it means it helps to persist  values between renders but dosent re-render the component by any chance.</h4>

        <input type="text"
         name="" 
         id=""
         value={inputValue}
         onChange={e=>setInputValue(e.target.value)}
         
         />
        
        <h3>Render nmbr is : {storevalueBtwinTwoRenders.current}</h3>

        <p ref={getDomElemAccess} > print this p tag in console</p>
        {/* <h3>here is the p tag: {tag}</h3> */}
        <h3>previous InputValue is: {trackPreviousStateValue.current}</h3>

        </div>
    );
};

export default RefHook;