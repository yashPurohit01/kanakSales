import Link from 'next/link'
import React from 'react'
import { Navbar ,Container ,Offcanvas,Nav } from 'react-bootstrap'
import styles from './navbar.module.scss'

function NavBar() {
    return (
        <Navbar bg="red" expand={false} >
            <Container fluid>
            {/*     <Navbar.Brand href="/">kanak sales corporation</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="offcanvasNavbar"   />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    className={styles.navbarSideBar}
                >
                    <Offcanvas.Header closeButton className={styles.navbarHead}>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body  className={styles.navbarBody}>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link href="/"><a>Home</a></Link>
                            <Link href="/products"><a>Products</a></Link>
                            <Link href="/about"><a>About us</a></Link>
                            <Link href="/contact"><a>Contact us</a></Link>
                            
                        </Nav>
                      
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar