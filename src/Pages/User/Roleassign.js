// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import React, { useEffect, useState } from "react";

// function Roleassign(props) {
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [show, setShow] = useState();
//     return (
//     <>
//         <Button variant="secondary" onClick={handleShow}   >
                  
//                   Roleassign
//                 </Button>
      
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Userid</Form.Label>
//           <Form.Control type="id" placeholder="id"  value={props.userId} />
//           {/* <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text> */}
//         </Form.Group>
  
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Username</Form.Label>
//           <Form.Control type="name" placeholder="name" value={props.userId} />
//         </Form.Group>

        
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Roleassign</Form.Label>
//           <Form.Control type="name" placeholder="name" value={props.userName} />
//         </Form.Group>
       
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//       </>
//     );
//   }
  
//   export default Roleassign;



import React, {useEffect, useState} from 'react'
import {Button,  Modal, Form, Dropdown, DropdownButton} from 'react-bootstrap';
import axios from 'axios';


function RoleAssign(props) {
     /////////// STATES FOR GET ROLES ///////////
  // console.log(props.data, 'aya wala dats')
     const[roledata, setData]=useState([])
 

     //// STATES FOR POST ROLE ASSIGN DATA /////

     const [assignUserId, setAssignRoleUserId] = useState('')
     const [assignRoleId, setAssignRoleId] = useState('')
     

     ///////////////////////////////////////////////////
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /////////////////////////////   FUNCTION FOR GET ROLES     ///////////////////////////

  const getData = async ()=>{
    const api = await axios.get('http://localhost:5555/api/viewrole')
    const apiResult = api.data
    // console.log("api", api)
    // console.log("apiResult",apiResult)
    setData(apiResult)
    // console.log("roledata", roledata)
    // console.log(api, 'apidata')
  }

console.log(roledata, 'roledata')

useEffect(()=>{
  getData()
}, [])
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Role Assign
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User ID</Form.Label>
        <Form.Control value={props.userId}   type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control value={props.userName} type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Role</Form.Label>

<select> Select Role
{
  roledata && roledata.map((item, index)=>{
     return(
    
          <option placeholder='Select Role'>{`${item.rolename}`}</option>
       
     )
  })
}
</select>        
 </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
         <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default RoleAssign