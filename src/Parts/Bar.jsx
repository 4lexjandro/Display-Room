import React, { useState } from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Card from '../Visuals/Card.png'




const Bar = () => {

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container >
        <Navbar.Brand href="/" className="d-flex">
        <img src={Card} alt="" width="50" height="50" />
          
          
        </Navbar.Brand>
        <br/>

        <div className="rotate">  
        <Nav.Item  >
          <h1 className="rotate"></h1>
        </Nav.Item>
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
         
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        <br/>
        

        




        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#shop">
            <Nav.Item>
              <Nav.Link as={Link} to="/shop" onClick={() => updateExpanded(false)}>
               Shop
              </Nav.Link>
            </Nav.Item>

            

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
               {" "}
                Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/work"
                onClick={() => updateExpanded(false)}
              >
                 Work 
              </Nav.Link>
            </Nav.Item>

            


            

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;
