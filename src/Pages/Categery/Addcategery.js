import React,{useState} from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Addcategory = () => {
    const [category_id, setCategoryId] = useState('')
    const [category_name, setCategoryName] = useState('')
    const [category_image, setCategoryImage] = useState('')
    // const [gst, setGst] = useState('')
    const handleImage = (e) =>{
        setCategoryImage(e.target.files[0])
    }

    const submitData = async(e) =>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('category_id', category_id);
        formData.append('category_name', category_name);
        formData.append('category_image', category_image);
        // formData.append('gst', gst);
        const configs ={
            "content-Type": "multiple/form-data"
        }
        const apiData = await axios.post("http://localhost:5555/api/productAdd", formData, configs)
        console.log(apiData, 'apidata')
        setCategoryId('')
        setCategoryName('')
        setCategoryImage('')
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
        <Form.Label htmlFor='category_name'>Category Name</Form.Label>
        <Form.Control  name='category_name' id='category_name' type='text' value={category_name} onChange={(e) =>setCategoryName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor='category_image'>Category Image</Form.Label>
        <Form.Control  name='category_image' id='category_image' type='file' defaultValue={category_image} onChange={handleImage} />
      </Form.Group>

    <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


   </div>


 
   </>
  )
}

export default Addcategory