import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Link } from 'react-router-dom';

function Blog4() {
  return (
    <div>
      <Row>
        <Col sm={2}>
        <Header/>
        </Col>
        <Col sm={10}>
        <Link to='/Blog'><p className='hrrr'><KeyboardBackspaceOutlinedIcon/></p></Link>
<Row>
    <Col sm={6}>
    <h2><i>What's special about Omega watches?</i></h2>
    <p>Aside from being one of the most popular and recognizable Swiss watch brands, and creates very accurate, dependable, and durable watches.</p>
    <p>Omega watches is arguably one of the most sought-after watch brands in the world and is a known competitor of Rolex. This Swiss luxury watchmaker has a long history of producing high-quality timepieces that are both beautiful and functional.</p>
     <p>Omega built a strong and effective force of men dedicated to its cardinal principles of manhood, scholarship, perseverance, and uplift. In 1922, J. Alston Atkins, the 9th Grand Basileus, appointed the first district representatives. Today, there are eleven such officers who are elected annually at district meetings.</p>
    </Col>
    <Col sm={6} className='omeg'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZpORQjgHQd-OxY-_zMIqzYM8ba3NXBcTOg&s" alt="" />
    </Col>
    <Col sm={6} className='omeg0'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijiKXkBLeBLXeQi3Vsyf7OuyrsEfs4HTrWQ&s" alt="" />
    </Col>
    <Col sm={6}>
       <p className='nnn'>Omega is perhaps the one brand that gives Rolex a run for its money. The brand has been the official timekeeper for the Olympic Games over and over and is thoroughly deserved of its reputation for being one of the greatest Swiss watchmakers of all time. You may know the brand for its precise chronometer-certified movements or its presence on the wrist of 007 agent, James Bond. You may even recognise the brand for its Co-Axial escapement or its iconic Speedmaster design. Either way, there is a lot to explore when it comes to Omega.</p>
    </Col>
</Row>
        </Col>
      </Row>
    </div>
  )
}

export default Blog4
