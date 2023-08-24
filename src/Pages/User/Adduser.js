import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Adduser() {
  const [id,set_id] =useState("");
  const [name,setname] =useState("");
  // const [password,setPassword] =useState("");
   const [createdon,setCreatedon] =useState("");

function saveUser(){
    // console.log(user_id,user_name,password)
    let data={id,name,createdon}
    fetch("http://localhost:6000/api/addUser",{
      method:'post',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      console.log("result",result);
      result.json().then((resp)=>{
       console.log("resp",resp)
      })
    })
}
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User_id</Form.Label>
        <Form.Control type="text" value={id} onChange={(e) =>{set_id(e.target.value)}} placeholder=" user_id" />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>User_name</Form.Label>
        <Form.Control type="name" value={name} onChange={(e) =>{setname(e.target.value)}} placeholder="User_name" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>createdon</Form.Label>
        <Form.Control type="text" value={createdon} onChange={(e) =>{setCreatedon(e.target.value)}} placeholder="createdon" />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Status</Form.Label>
        <Form.Control type="password" placeholder="status" />
      </Form.Group> */}

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Createdon</Form.Label>
        <Form.Control type="date" value={createdon} onChange={(e) =>{setCreatedon(e.target.value)}} placeholder="createdon" />
      </Form.Group> */}

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Role</Form.Label>
        <Form.Control type="password" placeholder="Role" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Adduser;



// import React,{useState,useEffect} from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';

// function Adduser() {
 
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>User_id</Form.Label>
//         <Form.Control type="text"  placeholder=" user_id" />
//        </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>User_name</Form.Label>
//         <Form.Control type="name"  placeholder="User_name" />
//       </Form.Group>

      
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>createdon</Form.Label>
//         <Form.Control type="text" placeholder="createdon" />
//       </Form.Group>

     
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Adduser;