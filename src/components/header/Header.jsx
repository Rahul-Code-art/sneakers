import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { menuData , brandsData } from "../../data/menuData";
import { useState } from "react";
import { NavLink } from "react-bootstrap";
import Searchpopup from "../searchpopup/Searchpopup";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {

const [expanded, setExpanded] = useState(false);
  const handleClose = () => setExpanded(false);

const [showsearch, setShowsearch] = useState(false)

const { user, logout } = useContext(AuthContext);
 
  return (
    <Navbar expand="lg" className=" header" expanded={expanded}
  onToggle={() => setExpanded(!expanded)} >
      <Container fluid>

        {/* ===== BRAND ===== */}
        <Navbar.Brand as={Link} to="/">
          Sneak <span>Peak</span>
        </Navbar.Brand>

        {/* ===== MOBILE ICONS ===== */}
        <Nav className="mobile-cart-icon-box d-lg-none">
          <Nav.Link as={NavLink} to="/" className="cart-icon-box">
            <i className="bi bi-cart-plus-fill fs-5"></i>
            <Badge pill className="cart-badge">0</Badge>
          </Nav.Link>
          
          <Nav.Link onClick={()=> setShowsearch(true)}>
      <i className="bi bi-search"></i>
    </Nav.Link>
        </Nav>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        {/* ================= MOBILE OFFCANVAS ================= */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          placement="end"
          className="d-lg-none"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Sneak <span>Peak</span>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>

            <Nav className="flex-column">


 {/* Mobile Search */}
            <Form className="mt-4">
              <Form.Control
                type="search"
                placeholder="Search products..."
              />
            </Form>

              <Nav.Link as={Link} to="/">Home</Nav.Link>

              {/* Mobile Nested Dropdown */}
              {menuData.map((menu)=>(
 <NavDropdown title={menu.title} key={menu.title}>

{menu.categories.map((category)=>(
   <NavDropdown title={category.title} className="sub-menu" key={category.title}>

    {category.subCategory.map((item)=>(
<NavDropdown.Item as={Link} to={item.path} key={item.path} onClick={handleClose}>
                    {item.name}
                  </NavDropdown.Item>
    ))}
                </NavDropdown>
))}
              </NavDropdown>
              ))}
             
              <Nav.Link as={Link} to="/" onClick={handleClose}>Kids</Nav.Link>
              <Nav.Link as={Link} to="/" onClick={handleClose}>Accessories</Nav.Link>

            </Nav>

           

          </Offcanvas.Body>
        </Navbar.Offcanvas>

      {/* ================= DESKTOP NAV ================= */}
<Navbar.Collapse className="d-none d-lg-flex">

  {/* CENTER NAV LINKS */}
  <Nav className="mx-auto align-items-center">

    <Nav.Link as={Link} to="/">Home</Nav.Link>

    {/* Desktop Mega Menu */}
    {menuData.map((menu) =>(
      <Nav.Item className="mega-menu" key={menu.title}>
      <Nav.Link>{menu.title}</Nav.Link>

      <div className="mega-menu-content">
        <Container fluid>
          <div className="row">


{menu.categories.map((category) =>(
 <div className="col-md-2" key={category.title}>
              <h6>{category.title}</h6>
              <ul>
                {category.subCategory.map( (item)=>(
<li key={item.path}><Link to={item.path}>{item.name}</Link></li>
                ))}
               
              </ul>
              
            </div>
))}
           

          </div>
        </Container>
      </div>



    </Nav.Item>



    ))}
    

{brandsData.map((brands)=>(
<Nav.Item className="custom-menu" key={brands.title}>
      <Nav.Link as={Link} to={brands.slug}>{brands.title}</Nav.Link>

      <div className="custom-menu-content">
        <Container fluid>
          <div className="row">

 <div className="col-md-12" >
             
              <ul>
                {brands.organization.map( (item)=>(
<li key={item.path}><Link to={item.path}>{item.name}</Link></li>
                ))}
               
              </ul>
              
            </div>

          </div>
        </Container>
      </div>



    </Nav.Item>
))}
      





   
  </Nav>
 <Nav>
  {/* RIGHT SIDE (Search + Icons) */}
  <div className="d-flex align-items-center justify-content-evenly">

    <Nav.Link onClick={()=> setShowsearch(true)}>
      <i className="bi bi-search"></i>
    </Nav.Link>
    <Searchpopup show={showsearch} handleClose={()=>setShowsearch(false)} />

    <Nav.Link as={Link} to="/" className="cart-icon-box">
      <i className="bi bi-cart-plus-fill fs-5"></i>
      <Badge pill className="cart-badge">0</Badge>
    </Nav.Link>

{user ? (
  <NavDropdown
    title={<i className="bi bi-person-circle fs-5"></i>}
    align="end"
  >
    <NavDropdown.Item as={Link} to="/profile">
      My Profile
    </NavDropdown.Item>

    <NavDropdown.Divider />

    <NavDropdown.Item onClick={logout}>
      Logout
    </NavDropdown.Item>
  </NavDropdown>
) : (
  <NavDropdown
    title={<i className="bi bi-person-fill fs-5"></i>}
    align="end"
  >
    <NavDropdown.Item as={Link} to="/login">
      Login
    </NavDropdown.Item>

    <NavDropdown.Item as={Link} to="/register">
      Register
    </NavDropdown.Item>
  </NavDropdown>
)}

  </div>
</Nav>
</Navbar.Collapse>


      </Container>
   
    </Navbar>
    
  );
};

export default Header;
