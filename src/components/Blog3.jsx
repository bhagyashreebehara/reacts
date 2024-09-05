import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';


function Blog3() {
  return (
    <div>
      <Row>
        <Col sm={2}>
        <Header/>
        </Col>
        <Col sm={10}>
          <Link to='/Blog'><p className='hrrr'><KeyboardBackspaceOutlinedIcon/></p></Link>

        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPgpGyqj4zDiA7-IKLvSPifEy594kP13lwQ&s" alt="" />
          </Col>
          <Col sm={3}></Col>
          <Row>
            <h2><i>What is so special in Rado watch?</i></h2>
            <p>Our Mission. Rado is known as the Master of Materials. We have revolutionized traditional watchmaking, leading the industry by introducing high-tech ceramic, ultralight high-tech ceramic, colourful high-tech ceramic and Ceramos to our design-led collections.
             Rado is a globally recognised Swiss watch brand. It has fast become one of the best-known names in the luxury watch industry. The brand's dedication to high-quality movements and materials makes it stand apart from many of its competitors.
            </p>
            <h2><i>What is Rado famous for?</i></h2>
            <p>Rado is famous for innovative design and its use of revolutionary materials to create some of the world's most beautiful and durable watches. The brand traces its origins to 1917 with the founding of the Schlup & Co. watchmaking factory in Lengnau, Switzerland.</p>
          <p>Rather than casting a shadow of exclusivity, the price tag of this extraordinary timepiece serves as a testament to the meticulous artistry and uncompromising quality that defines Rado. This isn't just a watch; it's a harmonious symphony of design ingenuity and horological excellence.</p>
          <h2><i>What are the benefits of Rado watches?</i></h2>
          <p>Rado watches are very much durable. This Swiss luxury watch brand uses exclusive materials like Ceramic that makes their watches long-lasting. They are also known for their quality timekeeping.</p>
          
          
          </Row>
        </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Blog3
