import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'




function Signup() {
  return (
    <div> 
      <Row>
        <Col sm={6} className='head'>
        <img src="data:image/jpeg;base64,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" alt="" />
        </Col>
        <Col sm={6}>
        <div className='hello'>
          <h1><u>SIGNUP</u></h1>
      <label>Enter your Name:</label>
      <input type="text" placeholder='Enter your Name' />
      <br />
      <br />
      <label>E-Mail:</label>
      <input type="text" placeholder='Enter your @mail' />
      <br />
      <br />
      <label>Password:</label>
     <input type="pasword" placeholder='password' />
      <br />
      <br />
      <label>Mobile No: </label>
      <input type="number" placeholder='number' />
      <br />
      <br />
      <Link to='/'><button className='btn btn-primary'>Submit</button></Link>
    </div>
    </Col>
    </Row>
    </div>
  )
}

export default Signup
