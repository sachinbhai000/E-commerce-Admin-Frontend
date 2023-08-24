import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FcSupport, FcPlus, FcDeleteColumn } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
// import Modal from "react-bootstrap/Modal";
// import Addproduct from "./addproduct";
// import Addcategory from "../Categery/Addcategery";
// import Updatecategory from "../Categery/Updatecategery";
// import Roleassign from "../User/Roleassign";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import axios from "axios";
// import Sidebar from "./sidebar";
// import Updateproduct from "./updateproduct";

/////////////////get-methord////////////////////////

function Viewretailer() {
   const [user, setUser] = useState([]);
  // const [show, setShow] = useState();
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // //===================== Update model ======================//

  // const [showes, setShowes] = useState();
  // const handleClose1 = () => setShowes(false);
  // const handleShow2 = () => setShowes(true);
  

  // const navigate = useNavigate();

  const fetchData = async () => {
    const api = await axios.get("http://localhost:5555/api/viewRetailer", {
      withCredentials: true,
      credentials: "include",
    });
    console.log("dataapi", api.data);
    setUser(api.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
        <h3 style={{ backgroundColor: "pink", textAlign: "center" }}>
          Retailer
        </h3>
        {/* <Button
          variant="info"
          style={{ marginLeft: "900px" }}
          onClick={handleShow}
        >
          Add Product
        </Button> */}

        
        <div style={{ marginTop: "10px", marginLeft: "10px", width: "1000px" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Retailer_id ID</th>
                <th>Shop Name</th>
                {/* <th>password</th> */}
                {/* <th>Gst</th> */}
                <th>Owner Name</th>
                <th> Rregistration Document </th>
                <th>Gst No</th>
                <th>Registration No</th>
                <th> Pan_no </th>
                <th>Address </th>
                <th>State</th>
                <th>City</th>
                <th>Pincode</th>
                
              </tr>
            </thead>
            <tbody>
              {user.map((item) => {
                return (
                  <tr>
                    <td>{item.retailer_id }</td>
                    {/* <td>{item.password}</td> */}
                    <td>{item.shop_name}</td>
                    {/* <td>{item.password}</td> */}
                    <td>{item.owner_name}</td>
                    <td>{item.registration_document}</td>
                    <td>{item.gst_no }</td>
                    <td>{item.registration_no}</td>
                    <td>{item.pan_no}</td>
                    <td>{item.address }</td>
                    <td>{item.state }</td>
                    <td>{item.city }</td>
                    <td>{item.pincode }</td>
                   
                 
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
    </>
  );
}

export default Viewretailer;

