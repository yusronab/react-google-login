import '../App.css';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import logo from '../logo.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

async function currentUser(token) {
    const response = await fetch("https://api-resto-auth.herokuapp.com/api/v1/user/current", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    const data = await response.json()
    
    return data
}

function Navigation() {
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        currentUser(token)
            .then((data) => {
                setUser(data)
            })
            .catch((err) => console.log(err.message))
    }, [])

    function handleLogout() {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <Navbar key="lg" expand="lg" className="mb-3" style={{ background: '#F1F3FF' }}>
            <Container>
                <Navbar.Brand href="/">bcr</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/">Our Services</Nav.Link>
                            <Nav.Link href="/">Why Us</Nav.Link>
                            <Nav.Link href="/">Testimonial</Nav.Link>
                            <Nav.Link href="/">FAQ</Nav.Link>
                            <NavDropdown
                                id={`offcanvasNavbarDropdown-expand-lg`}
                                title={
                                    <div className="user-image">
                                        <img width="50"
                                            src={logo}
                                            alt="user img"
                                        />{!!user ? (
                                            user.name.charAt(0).toUpperCase() + user.name.slice(1)
                                        ) : (
                                            "Loading..."
                                        )}
                                    </div>
                                }
                            >
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Navigation