import React from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FavPokeCard from "./FavPokeCard";

export const FavList = (props) => {
  console.log(props.fav);

  const renderFavList = () => {
    return props.fav.map((favPoke) => {
      const { id, name, img } = favPoke;
      const pName = name.english;
      return (
        <div key={id}>
          <Col>
            <FavPokeCard id={id} name={pName} imgSrc={img} />
          </Col>
        </div>
      );
    });
  };

  return (
    <div>
      <h1 className="mb-4">Favorites</h1>
      <Row>{renderFavList()}</Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { fav: state.fav };
};

export default connect(mapStateToProps)(FavList);
