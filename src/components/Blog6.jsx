import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Link } from 'react-router-dom';

function Blog6() {
  return (
    <div>
      <Row>
        <Col sm={2}>
        <Header/>
        
        </Col>
        <Col sm={10}>
        <Link to='/Blog'><p className='hrrr'><KeyboardBackspaceOutlinedIcon/></p></Link>
        <h2><i>Why Fossil Watches are Special</i></h2>
        <p>The broad customer base is attracted to Fossil watches due to their strong brand reputation, diverse styles, long-lasting appeal, use of premium quality materials, vintage-inspired charm, attention to detail, timeless design and innovative features, making them truly unique.</p>

        <h3><i>Affordable Luxury</i></h3>
          <p>Fossil is a mid-tier brand in terms of price, and its high-quality watches are known for their durability. While some top-of-the-line Fossil watches can be pricey, the brand has many affordable offerings. The pricing relates to premium quality materials and craftsmanship. Fossil delivers exceptional watches with seemingly one of the best quality-to-price ratios, making them stand out in the market.</p>

          <h3><i>Timeless and Stylish Designs</i></h3>
          <p>From classic to trendy, the Fossil watches incorporate vintage aesthetics with modern elements. The label caters to all genders and age groups, featuring a diverse range of women's Fossil watches and men's Fossil watches. Their collection not only offers fashionable looks but also provides great value to customers.</p>
        <Row>
          <Col sm={4} className='fas'>
          <img src="data:image/jpeg;base64,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xkjgjHH5/skc2mf7D9R1U9ATx0lLPtaVJ2+EM7rauduebLm8q44KrtP4njpn3qF9ZAIBfPmG8BUG72qU4zwOrEYHSRFlDZ6N+II/fKmQ7QoB4AB/ASRR2xrdwOSWb3zwMdMewHoBwJFioscnoJe26fBG49ecdemP4zI+4ndw6/VirGKUw97dMJn6gP2mIwPhuPpKX+rT+N3/ACe9m/N+y9JURhvCFjD2a0mxh+b4/CZFPgGOBwBPs52pERAREQEREBERAREQEREBERAREQEREBKWUEEEAgjBB5BB6gyqIGju+ncHVafx7qgj6VD4g+kAsVAQdrK2MkdBgnPBmE7rB/sbPyH8Z0Z33rLdma4Dr81uI+9amI/aJzvvM6PHbe2WU0tx2jtdt29DxxyD09cffLkdrr62ftMpropJJdXLE9VsK+g9Okr+a6b2v/tV/wAEv+yvC11XaSkHBJOPjLnxrG6UWY+4fxn19NpscJafvub9wAhHwB90co4SPYndDWdoM/gitPB2hvFcp/KbsEbVbP8AJmbx7ld2K+z9KtCnc5O+2zGN7nqfgoHAHsPfMxf5FFzp9U/vcqfqVK3/AHJsec+d5bY9EREosREQEREBERAREQEREBERAREQEREBERAREQLfX076rE+2jL+spH985l0qoUUmwjKg/wAjn0/9ydRCcxa/TeHfdX08O62v9S1l/um3i+Wea13KCw3A4PqAp6e2Tj85WCPtD8xK0vYcA8fcD+8T784f4fqr/CbM3i1i/aX8xPehU2gmxs4GfogR09Dvj50/v+wD+6eQ+8QN2fI/SF7OZhz4l9jZxjOAidM/0JnExj5M9L4fZWlH2la3+1tdx+xhMnnJl3W86IiJCSIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAmlO9vdXtH59qWo0gsqew2I4FJyH8x6nPBZhz7TdcS2OVx6RZtzt/6L7Vyf9Qfkk8GjHPP858Z9/8ARnav+4WfrU/5s6IiW/Jkj0jnY9ze1f8AcLf1qf8AMntV3S7XVQvzEnAx/sD+3d/fOg4j8mSPSLHsLRmnS0UtjdVTXW2MY3KgBxjjqDL6Ima5ERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k=" alt="" />
          </Col>
          <Col sm={4} className='fas'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcKx4dYVcHNiHXDzf7RLh8Ho9lB-o-ps-cA&s" alt="" />
          </Col>
          <Col sm={4} className='fas'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGDo96R67wQZSRs4QTnjVA3rduyCGCnp5xQ&s" alt="" />
           </Col>
        </Row>
        <br />
        <h2><i>What is Fossil famous for</i></h2>
        <p>fossil, remnant, impression, or trace of an animal or plant of a past geologic age that has been preserved in Earth's crust. The complex of data recorded in fossils worldwide—known as the fossil record—is the primary source of information about the history of life on Earth.</p>
         <h2><i>What do watch people think of Fossil</i></h2>
         <p>While they aren't watch snobs by any means, their main points were that Fossil watches are only fashionable and affordable, but nothing else. They don't have a time-honored horology history, nor do they have a great, interesting heritage.</p>
        
        
        
        
        </Col>
      </Row>
    </div>
  )
}

export default Blog6
