import React from 'react'
import Row  from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col'
import Header from './Header'



function Services() {
  return (
    <div>
      <Row>
        <Col sm={2}>
        <Header/>
        </Col>
        <Col sm={10} className='font'>
          <h1>OUR SERVICES</h1>
          <p id="corner"></p>
          <br />
          <p>A complete service is a complicated process.</p> 
          <p>The watch is opened up, taken apart, cleaned, and polished.</p>
          <p>Any parts that show wear and tear are replaced, then the movement is reassembled, lubricated, and regulated.</p>
          <p>Whether you own an automatic, quartz, or mechanical watch, they all need servicing after a certain period. Just because something is not broken does not mean they don't need to get checked. Without servicing, the watch can develop problems later on, leading to expensive repairs that can be heavy on your pocket.</p>
          <p>They will likely require specialist tools and parts which you may not be able to acquire. Repairs for newer or more affordable watches are more accessible to a professional watchmaker with standardised tools and there is less risk involved in the process.</p>
       <div id="corner0">
        <p id="wwr">Getting a watch serviced should be the last of your worries especially
           if it is in good condition,
          <p> running on time, and has nothing wrong with it. </p>
           If your watch is greater or less than 4 years old from the date of purchase and it is not on time,
           you should get it serviced. </p>
       </div>
       <p></p>
       </Col>
      </Row>
    </div>
  )
}

export default Services
