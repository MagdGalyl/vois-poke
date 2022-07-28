import React from "react";
import Button from "react-bootstrap/Button";

function FavPokeCard({ id, name, imgSrc, rmvFav }) {
  return (
    <div>
      <img /*src={imgSrc}*/ className="rounded float-start" alt={name} />
      <span className="display-4">{name}</span>
      <Button variant="danger float-end" onClick={() => rmvFav(id)}>
        Remove
      </Button>{" "}
    </div>
  );
}

export default FavPokeCard;
 