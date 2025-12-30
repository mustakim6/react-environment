import React, { useEffect, useState } from 'react';

const useFetchUsers = () => {
    const [users, setUsers] = useState([])

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

    return [users];
};

export default useFetchUsers;