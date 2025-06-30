import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeComponent = () => {
  const cakeCount = useSelector((state) => {
    return state.cake.cakeCount;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Namber of cakes : {cakeCount}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeComponent;
