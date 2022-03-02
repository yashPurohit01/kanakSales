import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Link from 'next/link'
import styles from './dropdown.module.scss'

function DropDownNavBar() {
    return (
        <Navbar  expand="lg" className={styles.DropdownContainer} >
            <Container className={styles.dropDown}>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navIcon} />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.navs}>
                    <Nav className={styles.links}>

                        <Link href="/"><a>Home</a></Link>
                        <Link href="/products"><a>Products</a></Link>
                        <Link href="/about"><a>About </a></Link>
                        <Link href="/contact"><a> Contact</a></Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default DropDownNavBar