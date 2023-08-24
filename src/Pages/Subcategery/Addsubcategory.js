// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function Addcategery() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>C_id</Form.Label>
//         <Form.Control type="text" placeholder=" C_id" />
//        </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>C_name</Form.Label>
//         <Form.Control type="text" placeholder="C_name" />
//       </Form.Group>

//       {/* <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" placeholder="email" />
//       </Form.Group> */}

//       {/* <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Add</Form.Label>
//         <Form.Control type="text" placeholder="add" />
//       </Form.Group> */}
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Addcategery;


import React,{useState} from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Addsubcategory = () => {
    const [category_id, setCategoryId] = useState('')
    const [subcategory_id, setSubCategoryId] = useState('')
    const [subcategory_name, setSubCategoryName] = useState('')
    const [subcategory_image, setSubCategoryImage] = useState('')
    // const [gst, setGst] = useState('')
    const handleImage = (e) =>{
        setSubCategoryImage(e.target.files[0])
    }

    const submitData = async(e) =>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('category_id', category_id);
        formData.append('sub_categoryid', subcategory_id);
        formData.append('sub_categoryname', subcategory_name);
        formData.append('sub_categoryimg', subcategory_image);
        // formData.append('gst', gst);
        const configs ={
            "content-Type": "multiple/form-data"
        }
        const apiData = await axios.post("http://localhost:5555/api/addSubcategory", formData, configs)
        console.log(apiData, 'apidata')
        setCategoryId('')
        setSubCategoryId('')
        setSubCategoryName('')
        setSubCategoryImage('')
        // setGst('')
    }
  return (
   <>
   <div className='container'>
   <Form onSubmit={submitData} >
      <Form.Group className="mb-3">
        <Form.Label htmlFor='category_id'>category Id</Form.Label>
        <Form.Control name='category_id' id='category_id' type='text' value={category_id} onChange={(e) =>setCategoryId(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor='subcategory_id'>Sub CategoryId</Form.Label>
        <Form.Control  name='subcategory_id' id='subcategory_id' type='text' value={subcategory_id} onChange={(e) =>setSubCategoryId(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor='subcategory_name'>Sub CategoryName</Form.Label>
        <Form.Control  name='subcategory_name' id='subcategory_name' type='text' value={subcategory_name} onChange={(e) =>setSubCategoryName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor='subcategory_image'>Sub CategoryImage</Form.Label>
        <Form.Control  name='subcategory_image' id='subcategory_image' type='file' defaultValue={subcategory_image} onChange={handleImage} />
      </Form.Group>

      {/* <Form.Group className="mb-3">
        <Form.Label htmlFor='gst'>GST</Form.Label>
        <Form.Control  name='gst' id='gst' type='float' value={gst} onChange={(e) =>setGst(e.target.value)} />
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


   </div>


   {/* <form onSubmit={submitData}>
      <div className='container'>
       <div className='row'>
          <label htmlFor='category_id'>category Id</label><br/>
          <input name='category_id' id='category_id' type='text' value={category_id} onChange={(e) =>setCategoryId(e.target.value)}/> <br/>

          <label htmlFor='category_name'>category Name</label><br/>
          <input name='category_name' id='category_name' type='text' value={category_name} onChange={(e) =>setCategoryName(e.target.value)}/>  <br/> 

          <label htmlFor='category_image'>category Image</label><br/>
          <input name='category_image' id='category_image' type='file' defaultValue={category_image} onChange={handleImage}/>  <br/>
          
          <label htmlFor='gst'>GST</label><br/>
          <input name='gst' id='gst' type='float' value={gst} onChange={(e) =>setGst(e.target.value)}/> <br/>
          <button>Submit</button>
       </div>

      </div> */}
      {/* </form> */}
   </>
  )
}

export default Addsubcategory