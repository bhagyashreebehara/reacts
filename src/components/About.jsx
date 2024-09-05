import React from 'react'
import Header from './Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {productsData} from '../Data/Products'
import { Link } from 'react-router-dom'

function About() {
  

  return (
    <div className='min'>
      <Row>
        <Col sm={2}>
          <Header />
        </Col>
        <Col sm={10}>
        <div className='maincard'>
        {
        productsData.map((item)=>{
          return(
            <div className='card'>
              <Link to={`/about/${item.id}`}>
              <img src={item.image} alt="" />
              </Link>
              <p><strong>{"Id:"+""+item.id}</strong></p>
              <p><strong>{"BrandName:"+""+item.BrandName}</strong></p>
              <p><strong>{"ProductName:"+""+item.ProductName}</strong></p>
              <p><strong>{"Price:"+""+item.Price}</strong></p>
            </div>
          )
        })
        }
        </div>


        </Col>
      </Row>
    </div>
  )
}

export default About
