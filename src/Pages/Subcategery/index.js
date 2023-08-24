// import { Avatar, Rate, Space, Table, Typography } from "antd";
// import { useEffect, useState } from "react";
// import { getCustomers, getInventory } from "../../API";
// import { Link } from "react-router-dom";
// import { FcSynchronize } from "react-icons/fc";
// // import Modal from "react-bootstrap/Modal";
// // import Button from 'react-bootstrap/Button';

// function  Subcategery() {
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
//       <Typography.Title level={4}  style={{width:'100%'}}><h3 style={{backgroundColor:"pink",textAlign:'center'}}>Sub_Categery</h3></Typography.Title>

//       {/* <Button variant="info" style={{marginLeft:"900px"}} onClick={handleShow}>Addcategery </Button> */}

//       {/* <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//             <Modal.Title>Add_Categery</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//          <Addcategery/>
//         </Modal.Body>
//         <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//                 Close
//             </Button>
//         </Modal.Footer>
//       </Modal> */}



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
//             title: "Sc_id",
//             dataIndex: "firstName",
//           },
//           {
//             title: "C_id",
//             dataIndex: "lastName",
//           },
//           {
//             title: "Sc_name",
//             dataIndex: "email",
//           },
//           // {
//           //   title: "Add",
//           //   dataIndex: "phone",
//           // },

//           {
//             title: "Action",
//             dataIndex:"address",
//             render: (address) => {
//               return (
//                 <span>
//                  <Link to ="/Updatesubcategery">
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
// export default Subcategery;



import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FcSupport, FcPlus, FcDeleteColumn } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
// import Addcategory from "../Categery/Addcategery";
import Addsubcategory from "./Addsubcategory";
import Roleassign from "../User/Roleassign";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import axios from "axios";

/////////////////get-methord////////////////////////

function Viewsubcategory() {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   ////////// STATES FOR PAGINATION /////////
 
//  const[currentPage, setCurrentPage] = useState(1)
//  const[postPerPage, setPostPerPage] = useState(4)
 

  const navigate = useNavigate();

  useEffect(() => {
    getList();
  }, []);
  console.warn(user, "1111");
  function getList() {
    async function getData() {
      const response = await fetch("http://localhost:5555/api/viewSubcategory");
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

  function deleteUser(id) {
      // alert(id);
    fetch(`http://localhost:5555/api/deleteSubcategory${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
         getList();
      });
    });
  }

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
      <h3 style={{ backgroundColor: "pink", textAlign: "center" }}>AddCategory</h3>
      <Button
        variant="info"
        style={{ marginLeft: "850px" }}
        onClick={handleShow}
      >
        AddSubcategory
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add subCategory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Addsubcategory />
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
              <th>Category ID</th>
              {/* <th>password</th> */}
              <th>Sub Categoryid</th>
              <th>Sub Categoryname</th>
              {/* <th>Gst</th> */}
              <th>Sub Category Image</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.category_id}</td>
                  {/* <td>{item.password}</td> */}
                  <td>{item.sub_categoryid}</td>
                  <td>{item.sub_categoryname}</td>
                  <td><img src={item.sub_categoryimg }  style={{width: "80px", height: "70px", }}/></td>
                 
                  {/* <td>
                    <div style={{ width: "80px" }}>
                      <AiFillEdit /> 
                      
                      &nbsp; &nbsp;
                    
                      <AiFillDelete
                       onClick={() =>{
                  if (window.confirm('Are you sure to Delete Data'))
                   deleteUser(item.id,item.category_image)}}
                      />
                      </div>
                  </td> */}
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

export default Viewsubcategory;