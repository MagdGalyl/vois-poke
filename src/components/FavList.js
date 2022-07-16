import React from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import FavPokeCard from "./FavPokeCard";
import { rmvFav } from "../actions";

export const FavList = (props) => {
  const handleRmvFav = (id) => {
    console.log(id, "from handle");
    props.rmvFav(id);
  };

  const renderFavList = () => {
    return props.fav.map((favPoke) => {
      const { id, name, img } = favPoke;
      const pName = name.english;
      return (
        <div key={id} className="mb-4">
          <Col>
            <FavPokeCard
              id={id}
              name={pName}
              imgSrc={img}
              rmvFav={handleRmvFav}
            />
          </Col>
        </div>
      );
    });
  };

  return (
    <div>
      <h1 className="mb-4">Favorites</h1>
      <Row>{renderFavList()}</Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Button variant="outline-danger ">Remove All</Button>{" "}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { fav: state.fav };
};

const mapDispatchToProps = { rmvFav };

export default connect(mapStateToProps, mapDispatchToProps)(FavList);
