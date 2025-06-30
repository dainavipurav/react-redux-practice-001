import React from "react";
import { buyFish } from "../redux";
import { connect } from "react-redux";

const FishComponent = (props) => {
  return (
    <div>
      <h2>Number of Fish: {props.fishCount}</h2>
      <button onClick={props.buyFish}>Buy Fish</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fishCount: state.fish.fishCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyFish: () => dispatch(buyFish()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FishComponent);
