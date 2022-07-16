import React from "react";
import { connect } from "react-redux";
import { rmvFav } from "../actions";

export const FavList = (props) => {
  console.log(props.fav);

  // const handleRmvFav = (poke) => {
  //   props.addFav(poke);
  // };

  return (
    <div>
      <h1 className="mb-4">Favorites</h1>
      FavList
      {/* 0 */}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { fav: state.fav };
};

const mapDispatchToProps = { rmvFav };

export default connect(mapStateToProps, mapDispatchToProps)(FavList);

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// function PokeList(props) {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchPokes());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleRmvFav = (poke) => {
//     props.addFav(poke);
//   };

//   const renderList = () => {
//     return props.pokes.map((poke) => {
//       const { id, base, name, img } = poke;
//       const { Attack: atk, Defense: def } = base;
//       const pName = name.english;
//       return (
//         <div key={id}>
//           <Col>
//             <PokeCard
//               id={id}
//               name={pName}
//               atk={atk}
//               def={def}
//               imgSrc={img}
//               addFav={handleAddFav}
//               poke={poke}
//             />
//           </Col>
//         </div>
//       );
//     });
//   };
//   console.log(props.fav);
//   return (
//     <Row className="row-cols-sm-2 row-cols-md-3 g-3">
//       {renderList()}
//       {/* PlaceHolder */}
//     </Row>
//   );
// }

// const mapStateToProps = (state) => {
//   // console.log(state.fav);
//   return { pokes: state.pokes, fav: state.fav };
// };

// const mapDispatchToProps = { fetchPokes, addFav, rmvFav };

// export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
