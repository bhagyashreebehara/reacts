import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Link } from 'react-router-dom';

function Blog5() {
  return (
    <div>
      <Row>
        <Col sm={2}>
        <Header/>
        </Col>
        <Col sm={10}>
        <Link to='/Blog'><p className='hrrr'><KeyboardBackspaceOutlinedIcon/></p></Link>
        <marquee><strong>FASTTRACK WATCH</strong></marquee>

        <h2><i>What are the features of Fastrack watches?</i></h2>
        <p>You are tracking a lot with a smart watch's incredible features. For instance, if you take a Fastrack Reflex smart watch, you can enjoy a sleep tracker, a menstrual cycle tracker and a stress monitor. If that was not enough, you also get a Spo2 tracker and a heart rate monitor. </p>
         <p>Fastrack is India's foremost youth accessories brand. It is sporty and coed. It believes that it is all about range and delivers just that in almost ungodly quick cycles. The brand stays focused on its audience and delivers what they want before they even know they want it.</p>
        
        <h2><i>What is the company profile of Fastrack?</i></h2>
        <p>Fastrack is an Indian fashion accessory retail brand, launched in 1998 as a sub-brand of Titan Watches. In 2005, Fastrack was spun off as an independent brand targeting the urban youth and growing fashion industry in India.</p>
        <p>Titan Company commenced operations in 1984 under the name Titan Watches Limited. In 1994, Titan diversified into jewellery with Tanishq and subsequently into eyewear with Titan Eyeplus. In 2005, it launched its youth fashion accessories brand Fastrack.</p>
        <Row>
          <Col sm={4} className='fas'>
          <img src="data:image/jpeg;base64,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" alt="" />
          </Col>
          <Col sm={4} className='fas'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqdZmQ49-WL8YfMSHNWn2stdR1Gro4L8Qag&s" alt="" />
          </Col>
          <Col sm={4} className='fas'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1eognPpHmt8glXosq6vkzz35hFwWnDXLEg&s" alt="" />
          </Col>
          <h2><i>What is Fastrack for?</i></h2>
          <p>FasTrak is the preferred method of payment on The Toll Roads. It allows drivers to easily pay tolls electronically on every tolled bridge, lane and road in California.</p>
          <p>Fastrack is an Indian fashion accessory brand that makes watches for men, women, and children. Fastrack's watches are known for their trendy designs, functionality, and affordability. Here's some more information about the brand</p>
        </Row>

      </Col>

      </Row>
    </div>
  )
}

export default Blog5
