import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeComponent = (props) => {
  return (
    <div>
      <h2>Namber of cakes : {props.cakeCount}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cakeCount: state.cakeCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
