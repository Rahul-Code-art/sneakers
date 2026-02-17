import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';
import  "./header.css"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
     
        <Navbar expand="lg" className=" mb-3 header" >
          <Container fluid>
            <Navbar.Brand as={Link} to="/">Sneak <span>Peak</span></Navbar.Brand>

{/* for mobile  Start*/}
            <Nav className='mobile-cart-icon-box'>
                   <Nav.Link href="#" className="cart-icon-box">
  <i className="bi bi-cart-plus-fill fs-5"></i>
  <Badge  pill className="cart-badge">
    0
  </Badge>
</Nav.Link>    
 <Nav.Link href="#"><i className="bi bi-person-fill"></i></Nav.Link>
            </Nav>
{/* for mobile  End*/}

            <Navbar.Toggle aria-controls="offcanvasNavbar"/>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                 <Nav.Link href="#action1">Sneak <span>Peak</span></Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 px-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
              
                  <NavDropdown
                    title="Mens"
                    id="mensDropdown">
                    <NavDropdown.Item href="#action3">Mens Shoes 1</NavDropdown.Item>
                  </NavDropdown>

 <NavDropdown
                    title="Womens"
                    id="womensDropdown">
                    <NavDropdown.Item href="#action3">Women Shoes 1</NavDropdown.Item>
                  </NavDropdown>

                   <NavDropdown
                    title="Kids"
                    id="kidsDropdown">
                    <NavDropdown.Item href="#action3">Kids Shoes 1</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Accessories"
                    id="accessoriesDropdown">
                    <NavDropdown.Item href="#">Tote Bags</NavDropdown.Item>
                    <NavDropdown.Item href="#">Sling Bags</NavDropdown.Item>
                    <NavDropdown.Item href="#">Shoulder Bags</NavDropdown.Item>
                    <NavDropdown.Item href="#">Backpack</NavDropdown.Item>
                    <NavDropdown.Item href="#">Satchel</NavDropdown.Item>
                    <NavDropdown.Item href="#">Wallet</NavDropdown.Item>
                    <NavDropdown.Item href="#">Handheld Bags</NavDropdown.Item>
                  </NavDropdown>

                   <NavDropdown
                    title="Brands"
                    id="brandsDropdown">
                    <NavDropdown.Item href="#">Nike</NavDropdown.Item>
                    <NavDropdown.Item href="#">Sling Bags</NavDropdown.Item>
                    <NavDropdown.Item href="#">Shoulder Bags</NavDropdown.Item>
                    <NavDropdown.Item href="#">Backpack</NavDropdown.Item>
                    <NavDropdown.Item href="#">Satchel</NavDropdown.Item>
                    <NavDropdown.Item href="#">Wallet</NavDropdown.Item>
                    <NavDropdown.Item href="#">Handheld Bags</NavDropdown.Item>
                  </NavDropdown>

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                 
                </Form>

              {/* for mobile  Start*/}
            <Nav className='desktop-cart-icon-box'>
                   <Nav.Link href="#" className="cart-icon-box">
  <i className="bi bi-cart-plus-fill fs-5"></i>
  <Badge  pill className="cart-badge">
    0
  </Badge>
</Nav.Link>    
 <Nav.Link href="#"><i className="bi bi-person-fill"></i></Nav.Link>
            </Nav>
{/* for mobile  End*/}

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    </>
  )
}

export default Header
