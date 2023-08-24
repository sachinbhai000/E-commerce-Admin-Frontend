

// import React, { useState } from 'react'
// import { Button, Modal, Form } from 'react-bootstrap'
// import axios from 'axios';
// import { AiFillEdit, AiFillDelete } from "react-icons/ai";

// const Updatecategory = (props) => {

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


//   //////for update category////////////

//   const [categoryid, setCategoryId] = useState("")
//   const [categoryname, setCategoryName] = useState("")
//   const [categoryimage, setCategoryImage] = useState("")
//   const [gst, setGst] = useState("")

//   const handleImage = (e) => {
//     setCategoryImage(e.target.files[0])
//   }

//   const updateData = async (categoryId, categoryName, categoryImage, gst) => {
//     setCategoryId(categoryId)
//     setCategoryName(categoryName)
//     setCategoryImage(categoryImage)
//     setGst(gst)
//     handleShow()
//   }

//   const saveUpdateCategory = async () => {
//     //e.preventDefault();
//     const formData = new FormData()
//     formData.append("category_id", categoryid)
//     formData.append("category_name", categoryname)
//     formData.append("category_image", categoryimage)
//     formData.append("gst", gst)
//     const headers = {
//       "Content-Type": "multipart/form-data"
//     }
//     // console.log(categoryid)
//     // console.log(categoryname)
//     // console.log(categoryimage)
//     // console.log(gst)
//     // console.log(formData)
//     const apiData = await axios.put(`http://localhost:5500/productupdate/${categoryid}`, formData, headers)
//     console.log('api data', apiData)
//     handleClose()
//   }

//   return (
//     <div>
//       <AiFillEdit onClick={() => updateData(props.categoryId, props.categoryName, props.categoryImage, props.gst)} />

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Update Category</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Label>Category Id:</Form.Label><br />
//             <Form.Control type="text" value={categoryid} onChange={(e) => setCategoryId(e.target.value)} disabled /><br />
//             <Form.Label>Category name:</Form.Label><br />
//             <Form.Control type="text" value={categoryname} onChange={(e) => setCategoryName(e.target.value)} /><br />
//             <Form.Label>Category image:</Form.Label><br />
//             <Form.Control type="file" onChange={handleImage} />{"   "}
//             <img src={props.categoryImage} style={{ height: "50px", width: "50px" }} alt='' />
//             <br />
//             <hr />
//             <Form.Label>GST</Form.Label><br />
//             <Form.Control type="text" value={gst} onChange={(e) => setGst(e.target.value)} /><br />
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={saveUpdateCategory}>
//             Update changes
//           </Button>
//         </Modal.Footer>
//       </Modal>

//     </div>
//   )
// }

// export default Updatecategory;


import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Updatecategery = () => {
  const location = useLocation();

  const data = location.state.data;

  const [category, setCategory] = useState({
    category_id: data.category_id,
    category_name: data.category_name,
    category_image:data.category_image,
   
  });

  const {category_id,category_name,category_image } = category;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = category_id;

    const payload = {
      category_id,
      category_name,
      category_image,
    };

    const res = await axios.put(`http://localhost:5555/api/productCatetogyUpdate/${id}`,payload);
    const data = await res.data;

    console.log(data);
  };

return (
<>
<div style={{marginLeft:"400px"}}>
  <h3>Update Category</h3>
</div>
<div style={{ marginLeft: '220px', marginTop: '30px', border: '2pxsolid grey', width: '600px', backgroundColor:'white' }}>
        <Form onSubmit={handleSubmit} style={{ width: '500px', marginLeft: '40px', marginTop:
'20px', color:'white',marginBottom:'20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Category Id</Form.Label>
                <Form.Control type="text" 
                onChange={handleChange}
                name="category_id"
                value={category_id}
                placeholder="id" />
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text"
                  onChange={handleChange}
                name='category_name'
                value={category_name}
                 placeholder="name" />
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Category Image</Form.Label>
                <Form.Control type="text"
                  onChange={handleChange}
                name='category_image'
                value={category_image}
                 placeholder="image" />
              </Form.Group>
            </div>
          </div>
          
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

export default Updatecategery;

