// import Table from "react-bootstrap/Table";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FcSupport, FcPlus, FcDeleteColumn } from "react-icons/fc";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import Modal from "react-bootstrap/Modal";
// // import Addproduct from "./addproduct";
// // import Addcategory from "../Categery/Addcategery";
// // import Updatecategory from "../Categery/Updatecategery";
// // import Roleassign from "../User/Roleassign";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// // import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import axios from "axios";
// // import Sidebar from "./sidebar";
// // import Updateproduct from "./updateproduct";

// /////////////////get-methord////////////////////////

// function Customer() {
//    const [user, setUser] = useState([]);
//   // const [show, setShow] = useState();
//   // const handleClose = () => setShow(false);
//   // const handleShow = () => setShow(true);

//   // //===================== Update model ======================//

//   // const [showes, setShowes] = useState();
//   // const handleClose1 = () => setShowes(false);
//   // const handleShow2 = () => setShowes(true);

//   // const navigate = useNavigate();

//   const fetchData = async () => {
//     const api = await axios.get("http://localhost:5555/api/getcustomer", {
//       withCredentials: true,
//       credentials: "include",
//     });
//     console.log("dataapi", api.data);
//     setUser(api.data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//         <h3 style={{ backgroundColor: "pink", textAlign: "center" }}>
//           Retailer
//         </h3>
//         {/* <Button
//           variant="info"
//           style={{ marginLeft: "900px" }}
//           onClick={handleShow}
//         >
//           Add Product
//         </Button> */}

//         <div style={{ marginTop: "10px", marginLeft: "10px", width: "1000px" }}>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Email</th>
//                 <th>Mobile</th>
//                 <th>Password</th>
//                 <th>Registeron</th>
//                 <th>status</th>
//                  </tr>
//             </thead>
//             <tbody>
//               {user.map((item) => {
//                 return (
//                   <tr>
//                     <td>{item.email}</td>
//                     <td>{item.mobile}</td>
//                     <td>{item.password}</td>
//                     <td>{item.registeron}</td>
//                     <td>{item.status}</td>
//                    </tr>
//                 );
//               })}
//             </tbody>
//           </Table>
//         </div>
//     </>
//   );
// }

// export default Customer;

import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Customer() {
  const [data, setData] = useState([]);

  useEffect(() => {
          //==============Normul function======================//
    //   async function getUser() {
    //       const response = await axios.get('http://localhost:5555/api/getcustomer');
    //       setData(response.data)
    //   }
    //   getUser();
    //  },[])

                          //================Arrow function======================//

    const getUser = async() =>{
      const response = await axios.get("http://localhost:5555/api/getcustomer");
      setData(response.data);
    }
    getUser();
  }, []);
  return (
    <>
      <h3 style={{ backgroundColor: "pink", textAlign: "center" }}>Customer</h3>
      <div style={{ marginTop: "10px", marginLeft: "10px", width: "1000px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Mobile</th>
              <th>Password</th>
              <th>Registeron</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.password}</td>
                  <td>{item.registeron}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Customer;
