import React from 'react'
import './App.css'
import Row  from 'react-bootstrap/Row'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login01 from './components/Login01'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Logout from './components/Logout'
import Hooks from './Data/Hooks'
import Blog1 from './components/Blog1'
import Blog2 from './components/Blog2'
import Blog3 from './components/Blog3'
import Blog4 from './components/Blog4'
import Blog5 from './components/Blog5'
import Blog6 from './components/Blog6'



function App() {
  return (
    <div>
        <Row>
            <Router>
                <Routes>
                    <Route path='/' element={<Login01/>}/>
                    <Route path='/Signup' element={<Signup/>}/>
                    <Route path='/Dashboard' element={<Dashboard/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/services' element={<Services/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                       <Route path='/blog1' element={<Blog1/>}/>
                       <Route path='/blog2' element={<Blog2/>}/>
                       <Route path='/blog3' element={<Blog3/>}/>
                       <Route path='/blog4' element={<Blog4/>}/>
                       <Route path='/blog5' element={<Blog5/>}/>
                       <Route path='/blog6' element={<Blog6/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                    <Route path='/hooks' element={<Hooks/>}/>
                </Routes>
            </Router>
        </Row>
    </div>
  )
}

export default App
