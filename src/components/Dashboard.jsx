import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'

function Dashboard() {
  return (
    <div>
      <Row>
        <Col sm={2}>
        <Header/>
        </Col>
        <Col sm={10}><h1>Dashboard</h1>
        <Col sm={5}>
        <h2>hhh</h2>
        </Col>
        <Col sm={5}>h</Col>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
