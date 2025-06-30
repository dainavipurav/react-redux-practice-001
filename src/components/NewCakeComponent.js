import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
import { useState } from "react";

const CakeComponent = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Namber of cakes : {props.cakeCount}</h2>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <br />
      <br />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cakeCount: state.cake.cakeCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (num) => dispatch(buyCake(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
