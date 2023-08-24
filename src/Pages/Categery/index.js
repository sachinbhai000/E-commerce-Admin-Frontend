import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { FcSupport, FcPlus, FcDeleteColumn } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Addcategory from "../Categery/Addcategery";
import Updatecategory from "../Categery/Updatecategery";
// import Roleassign from "../User/Roleassign";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import axios from "axios";

/////////////////get-methord////////////////////////

function Viewcategory() {
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
      const response = await fetch("http://localhost:5555/api/viewCategory");
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

  function deleteUser(category_id) {
      // alert(id);
    fetch(`http://localhost:5555/api/productDelete/${category_id}`, {
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
      <h3 style={{ backgroundColor: "pink", textAlign: "center" }}>Category</h3>
      <Button
        variant="info"
        style={{ marginLeft: "900px" }}
        onClick={handleShow}
      >
       AddCategory
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Addcategory />
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
              <th>Category Name</th>
              <th>Category Image</th>
              {/* <th>Gst</th> */}
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.category_id}</td>
                  {/* <td>{item.password}</td> */}
                  <td>{item.category_name}</td>
                  <td><img src={item.category_image}  style={{width: "70px", height: "50px", }}/></td>
                 
                  
                    
                  {/* <Updatecategory category_id={item.category_id} category_name={item.category_name} category_image={item.category_image}/> */}
                  <td>
                      <AiFillEdit onClick={() =>
                      navigate("/Updatecategery", {
                        state: { data: item },
                      })
                    } /> 
                      
                      &nbsp; &nbsp;
                    
                      <AiFillDelete
                       onClick={() =>{
                  if (window.confirm('Are you sure to Delete Data'))
                  deleteUser(item.category_id)
                  // deleteUser(item.category_id)
                  }}
                      />
                      
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

export default Viewcategory ;