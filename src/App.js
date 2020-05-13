import React from 'react';
import './App.css';
import  Home from './cmp/Home';
import  About from './cmp/About';
import  Ant from './cmp/Ant';
import  Service from './cmp/service'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link}  from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import { Table, Icon } from 'antd';


function App() {
  return (
    <div >
 <Router>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/">Home </Link></Nav.Link>
      <Nav.Link href="#features"> <Link to="/about">React-Table  </Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/ant">Ant Table </Link></Nav.Link>
      <Nav.Link href="#pricing"> <Link to="/service">Services </Link></Nav.Link>
    </Nav>

</Navbar>

        <Route path="/about" component={About}>  <About/>  </Route> 
        <Route path="/ant">  <Ant/>  </Route> 
        <Route path="/service">  <Service/>  </Route> 
        <Route path="/" exact>  <Home/>  </Route> 


        


   </Router>

     
    </div>
  );
}

export default App;
