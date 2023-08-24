import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';

function Addrole() {
  const[roleid, setRoleid] = useState("")
  const[rolename, setRolename] = useState("")

  function saverole(){
    let data={roleid,rolename}
    fetch("http://localhost:5555/api/addrole",{
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
        <Form.Label>Role_id</Form.Label>
        <Form.Control type="text"
        value ={roleid}
        onChange={(e) =>{setRoleid(e.target.value)}}
        name='roleid'
         placeholder=" role_id" />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Role_name</Form.Label>
        <Form.Control type="text"
        value ={rolename}
        onChange={(e) =>{setRolename(e.target.value)}}
        name='rolename'
         placeholder="role_name" />
      </Form.Group>
{/* 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Action</Form.Label>
        <Form.Control type="password" placeholder="Action" />
      </Form.Group> */}

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Role</Form.Label>
        <Form.Control type="password" placeholder="Role" />
      </Form.Group> */}
      <Button onClick ={saverole} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Addrole;