import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIcecream } from "../redux";

const ItemComponent = (props) => {
  return (
    <div>
      <h2>
        {props.name} - {props.itemCount}
      </h2>
      <button onClick={props.itemAction}>Buy {props.name}</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.cakeCount
    : state.icecream.icecreamCount;
  const itemName = ownProps.cake ? "Cake" : "Icecream";

  return {
    itemCount: itemState,
    name: itemName,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatch = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());

  return {
    itemAction: itemDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemComponent);
