import React, { useEffect, useState } from 'react';

const GetGreetings = ({ getGreetings}) => {
    const [greet, setGreet] = useState()

    useEffect(()=>{  
        setGreet(getGreetings())
         console.log('greet run');
    },[getGreetings])


   
    return (
        <div>
            <h2>{greet}</h2>
        </div>
    );
};

export default GetGreetings;