import React from 'react'
import { Link } from 'react-router-dom'
import Row  from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col'
import Header from './Header'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Logout() {
  return (
    <div>
            <Row>
        <Col sm={2}>
    <Header/>
            
        </Col>
        <Col sm={10} className='web'>
        <div className='test'> 
        <LogoutOutlinedIcon/><h4 className='hoo'>Logout</h4>
      <strong><p className='ho'>Are You Sure You Want To Logout.</p></strong>
     <Link to='/'><button className='btn btn-outline-primary'>LOGOUT</button></Link>
     </div>

       </Col>
      </Row>

    </div>
  )
}

export default Logout
