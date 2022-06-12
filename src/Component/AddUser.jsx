// import React, { useState } from "react";
// import axios from 'axios';
// import { useHistory } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// const AddUser = () => {
//   let history = useHistory();
//   const [user, setUser] = useState({
//     name: "",
//     _id: "",
//     age: ""
//     // phone: "",
   
//   });

//   const { name, _id, age,  } = user;
//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
//     // await axios.post("http://localhost:3003/users", user);
//     await axios.post("https://mockrestapi.herokuapp.com/api/employee", user);

//     history.push("/");
//   };
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Add A User</h2>
//         <form onSubmit={e => onSubmit(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Name"
//               name="name"
//               value={name}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Username"
//               name="username"
//               value={_id}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control form-control-lg"
//               placeholder="Enter Your E-mail Address"
//               name="email"
//               value={age}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
         
         
//           {/* <button className="btn btn-primary btn-block">Add User</button> */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddUser;





import React, { useState } from "react";
import axios from 'axios';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const AddUser = () => {
  const url ="mockrestapi.herokuapp.com/api/employee"
  const [data, setData] = useState({
    name: "",
    // _id: "",
    // age: ""
    
   
  });

  function submit(e){
    e.preventDefault();
    axios.post(url,{
        name:data.name,
        // _id:data._id,
        // age:data.age
    })
    .then(res=>{
        console.log(res.data);
    })
  }
  function handle(e){
    const newdata={...data};
    newdata[e.target._id]=e.target.value
    setData(newdata);console.log(newdata)
  }
  


  return (
    // <div className="container">
    //   <div className="w-75 mx-auto shadow p-5">
    //     <h2 className="text-center mb-4">Add A User</h2>

         <div>
        <form onSubmit={(e) => submit(e)}>
          {/* <div className="form-group"> */}
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              id="name"
             // name="name"
              value={data.name}
              onChange={(e) => handle(e)}></input>

              <button>submit</button>
              </form>
            
          </div>
          
          
         

          /* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={data._id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={data.age}
              onChange={e => onInputChange(e)}
            />
          </div> */
         
         
          /* <button className="btn btn-primary btn-block">Add User</button> */
       
    //   </div>
    // </div>
  );
};

export default AddUser;








