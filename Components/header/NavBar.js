import React from 'react'
import { Navbar ,Container ,Offcanvas,Nav } from 'react-bootstrap'


function NavBar() {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/contact">Contact us</Nav.Link>
                            
                        </Nav>
                      
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar