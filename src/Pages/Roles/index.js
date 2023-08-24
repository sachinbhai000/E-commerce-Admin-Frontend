// import { Avatar, Rate, Space, Table, Typography } from "antd";
// import { useEffect, useState } from "react";
// import { getCustomers, getInventory } from "../../API";
// import Modal from "react-bootstrap/Modal";
// import AddRole from "../Roles/Addrole";
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom"; 
// import { FcSynchronize } from "react-icons/fc";


// function Roles() {
//   const [loading, setLoading] = useState(false);
//   const [dataSource, setDataSource] = useState([]);
//   const [show, setShow]= useState();
//   const handleClose = () => setShow(false)
//   const handleShow = () => setShow(true)

//   useEffect(() => {
//     setLoading(true);
//     getCustomers().then((res) => {
//       setDataSource(res.users);
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <Space size={20} direction="vertical">
//       <Typography.Title level={4}  style={{width:'100%'}}><h3 style={{backgroundColor:"pink",textAlign:'center'}}>Roles</h3></Typography.Title>

//       <Button variant="info" style={{marginLeft:"900px"}} onClick={handleShow} >AddRole
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//             <Modal.Title>Add_Role</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//          <AddRole/>
//         </Modal.Body>
//         <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//                 Close
//             </Button>
//         </Modal.Footer>
//       </Modal>



//       <Table style={{width:"1010px"}}
//         loading={loading}
//         columns={[
//           // {
//           //   title: "Photo",
//           //   dataIndex: "image",
//           //   render: (link) => {
//           //     return <Avatar src={link} />;
//           //   },
//           // },
//           {
//             title: "Role_id",
//             dataIndex: "firstName",
//           },
//           {
//             title: "Role_name",
//             dataIndex: "lastName",
//           },
//           // {
//           //   title: "Action",
//           //   dataIndex: "email",
//           // },
//           // {
//           //   title: "Phone",
//           //   dataIndex: "phone",
//           // },

//           {
//             title: "Action",
//             dataIndex: "address",
//             render: (address) => {
//               return (
//                 <span>
//                  <Link to ="/updaterole">
//                <FcSynchronize style={{fontSize:"35px"}}/>
//                </Link>
//                   {/* {address.address}, {address.city} */}
//                 </span>
//               );
//             },
//           },
//         ]}
//         dataSource={dataSource}
//         pagination={{
//           pageSize: 5,
//         }}
//       ></Table>
//     </Space>
//   );
// }
// export default Roles;


// import Table from "react-bootstrap/Table";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { FcSupport, FcPlus, FcDeleteColumn } from "react-icons/fc";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Modal from "react-bootstrap/Modal";
// import Addrole from "../Roles/Addrole";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { AiFillEdit, AiFillDelete } from "react-icons/ai";

// /////////////////get-methord////////////////////////

// function Viewrole() {
//   const [user, setUser] = useState([]);
//   const [show, setShow] = useState();
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   // const [user_id, setUser_id] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [user_name, setUser_name] = useState("");
//   // const [id,setuserId] = useState(null)

//   const navigate = useNavigate();

//   useEffect(() => {
//     getList();
//   }, []);
//   console.warn(user, "1111");
//   function getList() {
//     async function getData() {
//       const response = await fetch("http://localhost:5555/api/viewrole");
//       const data = await response.json();
//       setUser(data);
//        }
//     getData();
//   }

//   //////////////delete-methord//////////////////////

//   function deleteUser(id) {
//     //  alert(user_id);
//     fetch(`http://localhost:5555/api/deleteUser/${id}`, {
//       method: "DELETE",
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.log(resp);
//         getList();
//       });
//     });
//   }

//   ////////////////////Update user/////////////////////////

//   // function selectUser(user_id) {
//   //   console.log(user[user_id - 1]);
//   //   let item = user[user_id - 1];
//   //   setUser_id(item.user_id);
//   //   setPassword(item.password);
//   //   setUser_name(item.user_name);
//   //   setuserId(item.id)
//   // }
//   // async function updateUser()
//   // {
//   //   let item={user_id,password,user_name,id}
//   //   await fetch(`http://localhost:2555/updateuser/${user_id}`, {
//   //     method: "PUT",
//   //     headers:{
//   //       'Accept':'application/json',
//   //       'Content-Type':'application/json'

//   //     },
//   //     body:JSON.stringify(item)
//   //   }).then((result) => {
//   //     result.json().then((resp) => {
//   //       console.log(resp);
//   //       getList();
//   //     });
//   //   });
//   // }

//   return (
//     <>
//       <h3 style={{ backgroundColor: "pink", textAlign: "center" }}>Role</h3>
//       <Button
//         variant="info"
//         style={{ marginLeft: "900px" }}
//         onClick={handleShow}
//       >
//         AddRole
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>AddRole</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Addrole />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* <span style={{
//       marginLeft:"1000px",
//       fontSize:"40px",
//       marginTop:"20px"
//     }}>
//     <Link to ="/Adduser">
//     <FcPlus />
//     </Link>
//     </span> */}

//       <div style={{ marginTop: "10px", marginLeft: "10px", width: "1000px" }}>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Roleid</th>
//               {/* <th>password</th> */}
//               <th>Rolename</th>
//               {/* <th>coaredtion</th>
//               <th>Status</th>
//               <th>Role</th>
//               <th>operation</th> */}
//               <th>Operation</th>
//             </tr>
//           </thead>
//           <tbody>
//             {user.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{item.roleid}</td>
//                   {/* <td>{item.password}</td> */}
//                   <td>{item.rolename}</td>
//                   {/* <td>{item.createdon}</td> */}
//                   {/* <td>
//                     <Form>
//                       <Form.Check // prettier-ignore
//                         type="switch"
//                         id="custom-switch"
//                         // label="Check this switch"
//                       />
//                     </Form>
                  
                    
//                   </td> */}
//                   {/* <td>
//                     <Button  variant="secondary">Roleassign</Button>&nbsp; &nbsp;
//                     <Button>view</Button>
//                   </td> */}
//                   <td>
//                   <div style={{width:"80px"}}>
//                   <AiFillEdit/>&nbsp; &nbsp;
                  
//                   {/* <AiFillDelete onClick={() =>{
//                     if (window.confirm("Are you sure to Delete Data"))
//                     deleteUser(item.id); */}
//                   {/* }} */}

//                   {/* /> */}
//                    </div>
//                     {/* <button
//                       // style={{
//                       //   background: "red",
//                       //   color: "white",
//                       //   marginLeft: "20px solid",
//                       //   border: "white 2px solid",
//                       // }}
//                       onClick={() => {
//                         if (window.confirm("Are you sure to Delete Data"))
//                           deleteUser(item.user_id);
//                       }}
//                     >
//                       <FcDeleteColumn />
//                       Delete
//                     </button> */}

//                     {/* <button
//                 style ={{backgroundColor:"green", color:"white", border:"white 2px solid"}}
//                 onClick={() =>
//                 Navigate("/Adduser" ,{
//                   state:{data:item},
//                 })}>
//                 */}
//                     {/* <button
//                       style={{
//                         backgroundColor: "green",
//                         color: "white",
//                         border: "white 2px solid",
//                       }}
//                       onClick={() =>
//                         navigate("/updateuser", {
//                           state: { data: item },
//                         })
//                       }
//                     >
//                       <FcSupport />
//                       Update
//                     </button> */}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//         {/* <div>
//         <input type="text" value={user_id} onChange={(e)=>setUser_id(e.target.value)}/>
//         <br />
//         <br />
//         <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//         <br />
//         <br />
//         <input type="text" value={user_name} onChange={(e)=>setUser_name(e.target.value)}/>
//         <br />
//         <br />
//         <button onClick={UpdateUser}>updateUser</button>
//       </div> */}
//       </div>
//     </>
//   );
// }

// export default Viewrole;

import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FcSupport, FcPlus, FcDeleteColumn } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Addrole from "../Roles/Addrole";
import Roleassign from "../User/Roleassign";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import axios from "axios";

/////////////////get-methord////////////////////////

function Viewuser() {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   ////////// STATES FOR PAGINATION /////////
 
//  const[currentPage, setCurrentPage] = useState(1)
//  const[postPerPage, setPostPerPage] = useState(4)
 

  const navigate = useNavigate();
// 
  useEffect(() => {
    getList();
  }, []);
  console.warn(user, "1111");
  function getList() {
    async function getData() {
      const response = await fetch("http://localhost:5555/api/viewrole");
      const data = await response.json();
      setUser(data);
      // setUser_id(data[0].user_id);
      // setPassword(data[0].password);
      // setUser_name(data[0].user_name);
      // setuserId(data[0].id)

      // console.log(data,"ttt")
    }
    getData();
  }

  //////////////delete-methord//////////////////////

  // function deleteUser(id) {
  //     // alert(id);
  //   fetch(`http://localhost:5555/api/deleteUser/${id}`, {
  //     method: "DELETE",
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.log(resp);
  //        getList();
  //     });
  //   });
  // }

  ////////////////////Update user/////////////////////////

  // function selectUser(user_id) {
  //   console.log(user[user_id - 1]);
  //   let item = user[user_id - 1];
  //   setUser_id(item.user_id);
  //   setPassword(item.password);
  //   setUser_name(item.user_name);
  //   setuserId(item.id)
  // }
  // async function updateUser()
  // {
  //   let item={user_id,password,user_name,id}
  //   await fetch(`http://localhost:2555/updateuser/${user_id}`, {
  //     method: "PUT",
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-Type':'application/json'

  //     },
  //     body:JSON.stringify(item)
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.log(resp);
  //       getList();
  //     });
  //   });
  // }

  return (
    <>
      <h3 style={{ backgroundColor: "pink", textAlign: "center" }}>Role</h3>
      <Button
        variant="info"
        style={{ marginLeft: "900px" }}
        onClick={handleShow}
      >
        AddRole
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Addrole/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <span style={{
      marginLeft:"1000px",
      fontSize:"40px",
      marginTop:"20px"
    }}>
    <Link to ="/Adduser">
    <FcPlus />
    </Link>
    </span> */}
      <div style={{ marginTop: "10px", marginLeft: "10px", width: "1000px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Role ID</th>
               <th>Role Name</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.roleid}</td>
                  {/* <td>{item.password}</td> */}
                  <td>{item.rolename}</td>
                  {/* <td>{item.createdon}</td> */}
                   {/* <td>
                    <Form>
                      <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        // label="Check this switch"
                      />
                    </Form>
                  </td>  */}
                  {/* <td> */}
                  {/* <Roleassign userId={item.id} userName={item.name} />  */}
                  {/* <Roleassign   userId={item.id} userName={item.name}/>
                    <Button variant="secondary" onClick={handleShow} userId={item.id} userName={item.name}  >
                  
                      Roleassign
                    </Button>
                    
                    &nbsp; &nbsp;
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Roleassign</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Roleassign />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <Button>view</Button> */}
                  {/* </td> */}
                  <td>
                      <AiFillEdit    onClick={() =>
                      navigate("/Updaterole", {
                        state: { data: item },
                      })
                    } /> 
                      
                      &nbsp; &nbsp;
                    
                      {/* <AiFillDelete
                       onClick={() =>{
                  if (window.confirm('Are you sure to Delete Data'))
                   deleteUser(item.id)}}
                      /> */}
                    
                   
                    {/* <button
                      // style={{
                      //   background: "red",
                      //   color: "white",
                      //   marginLeft: "20px solid",
                      //   border: "white 2px solid",
                      // }}
                      onClick={() => {
                        if (window.confirm("Are you sure to Delete Data"))
                          deleteUser(item.id);
                      }}
                    >
                      <FcDeleteColumn />
                      Delete
                    </button> */}

                    {/* <button
                style ={{backgroundColor:"green", color:"white", border:"white 2px solid"}}
                onClick={() =>
                Navigate("/Adduser" ,{
                  state:{data:item},
                })}>
                */}
                    {/* <button
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        border: "white 2px solid",
                      }}
                      onClick={() =>
                        navigate("/updateuser", {
                          state: { data: item },
                        })
                      }
                    >
                      <FcSupport />
                      Update
                    </button> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {/* <div>
        <input type="text" value={user_id} onChange={(e)=>setUser_id(e.target.value)}/>
        <br />
        <br />
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <br />
        <input type="text" value={user_name} onChange={(e)=>setUser_name(e.target.value)}/>
        <br />
        <br />
        <button onClick={UpdateUser}>updateUser</button>
      </div> */}
      </div>
    </>
  );
}

export default Viewuser;
