import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import  Row  from 'react-bootstrap/Row'
import  Col  from 'react-bootstrap/Col'



function LoginO1() {
  return (
<div>
  <Row>
    <Col sm={6} className='head1'>
    <img src="data:image/jpeg;base64,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" alt="" />
    </Col>
    <Col sm={6}>
  <div className='helo'>
      <h1><u>LOGIN</u></h1>
      <br />
      <label>@-Mail:</label>&nbsp;
      <input type="text" placeholder='enter your E-mail'/>
      <br />
      <br />
      <label>password:</label>&nbsp;
      <input type="password" placeholder='enter your password'/>
      <br />
      <br />
      <p>forgot password <br /> Don't have an account? <Link to='Signup/'>signup</Link> </p>
      <Link to='Dashboard/'><button className='btn btn-primary'>Login</button></Link>
  </div>

      </Col>
</Row>
  </div>

  )
}

export default LoginO1
