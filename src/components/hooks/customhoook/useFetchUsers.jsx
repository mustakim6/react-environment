import React, { useEffect, useState } from 'react';

const useFetchUsers = (username) => {
    const [users, setUsers] = useState([])
    
    const userDetails = username? users.find( (user)=>user.name.toLowerCase().includes(username.toLowerCase())) || null : null 

      useEffect(()=>{
                    fetch('https://jsonplaceholder.typicode.com/users')
                     .then(res=>res.json())
                     .then(data=>{
                        setUsers(data)
                        console.log(data);
                     })
                     .catch(err=>{
                        console.log(err);
                     })
      },[])

    return [users, userDetails];
};

export default useFetchUsers;