import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { rmvFav } from "../actions";

function FavPokeCard({ id, name, imgSrc }) {
  return (
    <div>
      <img src={imgSrc} className="rounded float-start" alt={name} />
      <span className="display-4">{name}</span>
      <Button variant="danger float-end">Remove</Button>{" "}
    </div>
  );
}

const mapDispatchToProps = { rmvFav };

export default connect(null, mapDispatchToProps)(FavPokeCard);
