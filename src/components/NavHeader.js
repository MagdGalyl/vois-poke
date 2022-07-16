import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

function NavHeader(props) {
  const favIcnz =
    props.fav.length === 0 ? (
      <i className="bi bi-star text-warning"></i>
    ) : (
      <div>
        <i className="bi bi-star-fill text-warning"></i>
        <span className="number text-warning">{props.fav.length}</span>
      </div>
    );

  return (
    <Navbar bg="primary" variant="light" expand="lg">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>Pokemon</Navbar.Brand>
        </Link>
        <Link to="/fav">{favIcnz}</Link>
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => {
  return { fav: state.fav };
};

export default connect(mapStateToProps)(NavHeader);
