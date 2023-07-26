import React from 'react'
import useFetchGetData from '../hooks/useFetchGetData'


interface User {
    id:number;
    name:string;
    username:string
    email:string;
    address:{};
    phone:string
}

function test_useFetchInitalData() {
    const restEndpoint = 'https://jsonplaceholder.typicode.com/users'
    const {data,setData,error,isloading}= useFetchGetData<User[]>(restEndpoint);

  return (
  <div>
        {data!.map((data,idx)=>{
            return <div key={idx}>{JSON.stringify(data)}</div>})}
    </div>
  )
}

export default test_useFetchInitalData