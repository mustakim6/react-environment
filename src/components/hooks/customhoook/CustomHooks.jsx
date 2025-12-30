import React, {  useState } from "react";
import '../../../App.css'
import GeneralUsers from "./GeneralUsers";
import useFetchUsers from "./useFetchUsers";

const CustomHooks = () => {
    const [username, setUserName] = useState('')
    const [users, userDetails] = useFetchUsers(username)


  return (
    <div className="showUser">
      <h3>Lets build custom-hooks</h3>

      <form action="">
        <h2>Find User From {users.length}</h2>
        <div>
          <input 
          className="searchBox"
          type="search" 
          placeholder="search here.."
          value={username} 
          onChange={(event)=>setUserName(event.target.value)}
          id="" 
          />
        </div>
      </form>

        <GeneralUsers userDetails={userDetails}></GeneralUsers>


    </div>
  );
};

export default CustomHooks;
