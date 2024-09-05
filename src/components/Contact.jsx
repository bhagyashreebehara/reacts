import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';


function Contact() {
  return (
    <div>
        <Row>
            <Col sm={2}>
            <Header/>
            </Col>
            <Col sm={10}>
            <Row>
                <Col sm={6} className='con'>
            <p><LocationOnOutlinedIcon/> Address <br />&nbsp;&nbsp;Satyam Junction <br />&nbsp;&nbsp;Visakhapatnam , Andhra pradesh</p>
            <p><PhoneInTalkOutlinedIcon/> Contact Us <br />&nbsp;&nbsp; 9758365920</p> 
            <p><MailOutlinedIcon/> General Support <br />&nbsp;&nbsp; contact@example.com</p>
                </Col>
                <Col sm={6} className='con0'>
                <br />
                &nbsp;<h5>Name*</h5>
                &nbsp;&nbsp;&nbsp;<input type="text" placeholder='Enter your Name'/>
                <br />
                <br />
                &nbsp;<h5>E-mail*</h5>
                &nbsp;&nbsp;&nbsp;<input type="text" placeholder='Enter your @mail.com'/>
                <br />
                <br />
                &nbsp;<h5>Contact*</h5>
                &nbsp;&nbsp;&nbsp;<input type="text" placeholder='Contact Number'/>
                <br />
                <br />
                &nbsp;<h5>Subject*</h5>
                &nbsp;&nbsp;&nbsp;<input type="text" placeholder='Subject'/>
                <br />
                <br />
                &nbsp;<h5>Message*</h5>
                &nbsp;&nbsp;&nbsp;< input type="text" placeholder='Message' className='inn'/>
                </Col>
            </Row>
      </Col>
        </Row>
    </div>
  )
}

export default Contact
