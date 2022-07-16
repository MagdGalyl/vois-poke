import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const PokeCard = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { name, atk, def, imgSrc, addFav, poke, isFav } = props;
  const disBtn = isFav ? (
    <Button
      className="mega-btn"
      variant="primary"
      onClick={() => addFav(poke)}
      disabled
    >
      ADD TO FAVORITES
    </Button>
  ) : (
    <Button className="mega-btn" variant="primary" onClick={() => addFav(poke)}>
      ADD TO FAVORITES
    </Button>
  );

  return (
    <Card className="shadow-sm">
      {/* <Card.Img
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        src={imgSrc}
      /> */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="d-flex justify-content-center">
          <Button variant="btn btn-outline-primary" disabled>
            Attack: {atk}
          </Button>
          <Button variant="btn btn-outline-danger" disabled>
            Defense: {def}
          </Button>
        </div>

        {disBtn}
      </Card.Body>
    </Card>
  );
};

export default PokeCard;
