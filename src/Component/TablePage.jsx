import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function TablePage() {
  const [users, setUsers] = useState([]);

  // const getData = async () => {
  //   const res = await fetch(
  //     "https://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=5"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data.data);
  //     });
  // };



  useEffect(() => {
    getData();
  }, []);



  const getData=async()=>{
    const res=await axios.get("https://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=5");
   // console.log(res.data);
   setUsers(res.data.data);

  }
  const deleteUser= async _id=>{
    const response=await axios.delete(`https://mockrestapi.herokuapp.com/api/employee/${_id}`)
    
    getData();
    



  }

  

  return (
    <>
    <h1>users</h1>

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">NAME</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Country</th>
      <th scope="col">About</th>
      <th scope="col">age</th>
      <th scope="col">DOB</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    

{users.map((user,index)=>(
  <tr>
   

    <th scope="row">
      {index+1}
    </th>
    <td>
      {user.name}
    </td>
    <td>{user.phone}</td>
    <td>{user.email}</td>
    <td>{user.country}</td>
    <td>{user.about}</td>
    <td>{user.age}</td>
    <td>{user.dob}</td> 
    <td>{user.address}</td>
    <td>
      <button  onClick={()=>deleteUser(user._id)}>Delete</button></td>
  </tr>
  
))

    }
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr> */}

    {/* <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
      {/* {data.map((curElem) => {
        return <h3> {curElem.name}</h3>;
      })} */}
    </>
  );
}
