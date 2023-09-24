import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import foto from "../Images/mapa.png";
import { connect } from "react-redux";
import { onLogout } from "../api/auth";
import { unauthenticateAdmin, unauthenticateUser } from "../redux/slices/auth_slice";
import { useNavigate } from "react-router-dom";

const NavbarComp = ({ isAuth, isAdmin, dispatch }) => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await onLogout();
      dispatch(unauthenticateUser());
      dispatch(unauthenticateAdmin())
      localStorage.removeItem("isAuth");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("idEmpleado");
      localStorage.removeItem("correo");
      navigate('/');
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="px-3" href="/">
        <img src={foto} alt="Imagen 1" width="100" height="40" />
      </Navbar.Brand>
        
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="px-5 mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/">Inicio</Nav.Link>
            { isAuth ? 
              (
                <>
                {!isAdmin && <Nav.Link href="/courses">Mapa</Nav.Link>}
                {!isAdmin && <Nav.Link href="/game">Información</Nav.Link>}
                {!isAdmin && <Nav.Link href="/rotaciones">Rotaciones</Nav.Link>}
                {!isAdmin && <Nav.Link href="/profile">Perfil</Nav.Link>}
                {isAdmin && <Nav.Link href="/data">Datos</Nav.Link>}
                <Nav.Link onClick={logout}>Log out</Nav.Link>
               </>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )
            }
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth, // Access the isAuth property correctly
    isAdmin: state.auth.isAdmin,
  };
};

export default connect(mapStateToProps)(NavbarComp);