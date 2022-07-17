import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { isFav } from "../actions";

export const PokeCard = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { name, atk, def, imgSrc, addFav, poke, isFav, disabled } = props;

  // const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    addFav(poke);
    // console.log(props.id);
    let isFavToggle = props.fav.filter((st) => {
      // console.log(st.id === props.id);
      return st.id === props.id;
    });
    props.isFav(isFavToggle);
    // console.log(props.isFav(isFavToggle));
  };

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

        <Button
          className="mega-btn"
          variant="primary"
          onClick={handleCardClick}
          // disabled={props.switch ? true : false}
        >
          ADD TO FAVORITES
        </Button>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.switch);
  return { fav: state.fav, switch: state.switch };
};

const mapDispatchToProps = { isFav };

export default connect(mapStateToProps, mapDispatchToProps)(PokeCard);

// import React from "react";

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

// export const PokeCard = (props) => {
//   // eslint-disable-next-line no-unused-vars
//   const { name, atk, def, imgSrc, addFav, poke, isFav, disabled } = props;

//   return (
//     <Card className="shadow-sm">
//       {/* <Card.Img
//         className="bd-placeholder-img card-img-top"
//         width="100%"
//         height="225"
//         src={imgSrc}
//       /> */}
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <div className="d-flex justify-content-center">
//           <Button variant="btn btn-outline-primary" disabled>
//             Attack: {atk}
//           </Button>
//           <Button variant="btn btn-outline-danger" disabled>
//             Defense: {def}
//           </Button>
//         </div>

//         <Button
//           className="mega-btn"
//           variant="primary"
//           onClick={() => {
//             return addFav(poke);
//           }}
//           disabled={disabled}
//         >
//           ADD TO FAVORITES
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default PokeCard;

// import React from "react";

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

// export const PokeCard = (props) => {
//   // eslint-disable-next-line no-unused-vars
//   const { name, atk, def, imgSrc, addFav, poke, isFav } = props;
//   const disBtn = isFav ? (
//     <Button
//       className="mega-btn"
//       variant="primary"
//       onClick={() => addFav(poke)}
//       disabled
//     >
//       ADD TO FAVORITES
//     </Button>
//   ) : (
//     <Button className="mega-btn" variant="primary" onClick={() => addFav(poke)}>
//       ADD TO FAVORITES
//     </Button>
//   );

//   return (
//     <Card className="shadow-sm">
//       {/* <Card.Img
//         className="bd-placeholder-img card-img-top"
//         width="100%"
//         height="225"
//         src={imgSrc}
//       /> */}
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <div className="d-flex justify-content-center">
//           <Button variant="btn btn-outline-primary" disabled>
//             Attack: {atk}
//           </Button>
//           <Button variant="btn btn-outline-danger" disabled>
//             Defense: {def}
//           </Button>
//         </div>

//         {disBtn}
//       </Card.Body>
//     </Card>
//   );
// };

// export default PokeCard;
