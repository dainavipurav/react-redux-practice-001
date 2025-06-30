import React from "react";
import { buyIcecream } from "../redux";
import { connect } from "react-redux";

const IcecreamComponent = (props) => {
  return (
    <div>
      <h2>Number of Icecreams : {props.icecreamCount} </h2>
      <button onClick={props.buyIcecream}>Buy Icecream</button>
    </div>
  );
};

const mapStateToProp = (state) => {
  return { icecreamCount: state.icecream.icecreamCount };
};

const mapDispatchToProp = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(IcecreamComponent);
