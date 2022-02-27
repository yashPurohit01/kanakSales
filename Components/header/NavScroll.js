import React from 'react'
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap'



function NavScroll() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/contact">Contact us</Nav.Link>
                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavScroll