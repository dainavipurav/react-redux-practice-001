import React from "react";
import { connect } from "react-redux";

const ItemComponent = (props) => {
  return (
    <div>
      <h2>
        {props.name} - {props.itemCount}
      </h2>
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

export default connect(mapStateToProps)(ItemComponent);
