import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PokeCard from "./PokeCard";
import { fetchPokes, addFav, tglFav } from "../actions";

function PokeList(props) {
  // const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddFav = (poke) => {
    let poke2 = { ...poke, tglFav: false };
    props.addFav(poke2);
  };

  const handleTglFav = (id) => {
    // let uFav = { ...poke, tglFav: false };

    props.tglFav(id);
  };

  const renderList = () => {
    return props.pokes.map((poke) => {
      const { id, base, name, img } = poke;
      const { Attack: atk, Defense: def } = base;
      const pName = name.english;
      return (
        <div key={id}>
          <Col>
            <PokeCard
              id={id}
              name={pName}
              atk={atk}
              def={def}
              imgSrc={img}
              addFav={handleAddFav}
              tglFav={handleTglFav}
              poke={poke}
            />
          </Col>
        </div>
      );
    });
  };

  return (
    <div>
      <h1 className="mb-4">List of Pokemons</h1>
      <Row className="row-cols-sm-2 row-cols-md-3 g-3">{renderList()}</Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { pokes: state.pokes, fav: state.fav };
};

const mapDispatchToProps = { fetchPokes, addFav, tglFav };

export default connect(mapStateToProps, mapDispatchToProps)(PokeList);

// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import PokeCard from "./PokeCard";
// import { fetchPokes, addFav, isFav } from "../actions";

// function PokeList(props) {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchPokes());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleAddFav = (poke) => {
//     props.addFav(poke);

//     let isFavToggle = props.fav.filter((st) => {
//       // console.log(st.id === poke.id);
//       return st.id === poke.id;
//     });
//     props.isFav(isFavToggle);
//     // console.log(isFavToggle);
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

//   return (
//     <div>
//       <h1 className="mb-4">List of Pokemons</h1>
//       <Row className="row-cols-sm-2 row-cols-md-3 g-3">{renderList()}</Row>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   console.log(state.switch);
//   return { pokes: state.pokes, fav: state.fav, switch: state.switch };
// };

// const mapDispatchToProps = { fetchPokes, addFav, isFav };

// export default connect(mapStateToProps, mapDispatchToProps)(PokeList);
