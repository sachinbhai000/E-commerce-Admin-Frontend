import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Updatesubcategery = () => {
  return (
<>
<div style={{marginLeft:"400px"}}>
  <h3>Update_subcategery</h3>
</div>
<div style={{ marginLeft: '220px', marginTop: '30px', border: '2pxsolid grey', width: '600px', backgroundColor:'white' }}>
        <Form style={{ width: '500px', marginLeft: '40px', marginTop:'20px', color:'white',marginBottom:'20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Sc_id</Form.Label>
                <Form.Control type="text" placeholder="Sc_id" />
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>C_id</Form.Label>
                <Form.Control type="text" placeholder="C_id" />
              </Form.Group>
            </div>
          </div>
           <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Sc_name</Form.Label>
            <Form.Control type="text" placeholder="Sc_name" />
          </Form.Group>
          

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Sub_categery_name</Form.Label>
            <Form.Control type="text" placeholder="sub_categery_name" />
          </Form.Group>


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

export default Updatesubcategery;