import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

const Updateuser = () => {

  const location = useLocation();

  const data = location.state.data;

  const [user, setUser] = useState({
    id: data.id,
    name: data.name,
    createdon: data.createdon,
  });

  const { id, name, createdon } = user;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = id;

    const payload = {
      id,
      name,
      createdon,
     };

    const res = await axios.put(`http://localhost:5555/api/userModify/${id}`,
      payload
    );
    const data = await res.data;

    console.log(data);
  };

  return (
<>
<div style={{marginLeft:"400px"}}>
  <h3>Update_user</h3>
</div>
<div style={{ marginLeft: '220px', marginTop: '30px', border: '2pxsolid grey', width: '600px', backgroundColor:'white' }}>
        <Form onSubmit={handleSubmit} style={{ width: '500px', marginLeft: '40px', marginTop:
'20px', color:'white',marginBottom:'20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>User Id</Form.Label>
                <Form.Control 
                 onChange={handleChange}
                name="id"
                value={id}
                type="text"
                 placeholder="user Id" />
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>User Name</Form.Label>
                <Form.Control 
                onChange={handleChange}
                name="name"
                value={name}
                type="text" 
                placeholder="user Name" />
              </Form.Group>
            </div>
          </div>
           <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>createdo</Form.Label>
            <Form.Control 
               onChange={handleChange}
                name="createdon"
                value={createdon}
                type="text"
             placeholder="createdo" />
          </Form.Group>
          
{/* 
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="role" />
          </Form.Group> */}


          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Quienty</Form.Label>
            <Form.Control type="text" placeholder="Quienty" />
          </Form.Group> */}
         
          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Prize</Form.Label>
            <Form.Control type="text" placeholder="Prize" />
          </Form.Group> */}


          <div style={{ display: 'flex', justifyContent:
'space-evenly', marginTop:'30px' }}>
            <div>
            <Button variant="primary" type="submit">
            Submit
          </Button>
            </div>
            <div>

          <Button variant="primary" type="submit" style={{ marginLeft:'10px' }}>
            Reset
          </Button>
            </div>
          </div>


        </Form>
      </div>
</>
  )
}

export default Updateuser;