import React from 'react'

import { useState } from 'react';
import { useEffect } from 'react';
import UserCard from '../components/UserCard';
import CardSkeleton from '../components/CardSkeleton';
import { axiosInstance } from '../config/axiosInterceptor';
const Userpage = () => {

  const [userData, setUserData] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true)
  let getUserData =async ()=>{
    try{
      let res =await axiosInstance("/users");
      console.log(res.data);
      setUserData(res.data);
      setLoadingUsers(false);
      }catch(error){
        console.log("Errors in user : ",error);
      }

    };

  useEffect(()=>{
      getUserData();
    },[]);

    if(loadingUsers){
      return (
    <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
    }
  return (
    <div className='flex grid grid-cols-4 gap-2'>
      {
        userData.map((val)=><UserCard key={val.id} user={val}/>)
      }
    </div>
  )
}

export default Userpage
