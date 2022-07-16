import React from "react";
import { connect } from "react-redux";

export const FavList = (props) => {
  console.log(props);
  return (
    <div>
      FavList
      {/* 0 */}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { fav: state.fav };
};

export default connect(mapStateToProps)(FavList);
