import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyFish } from "../redux";

const HooksFishComponent = () => {
  const fishCount = useSelector((state) => {
    return state.fish.fishCount;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Fish: {fishCount}</h2>
      <button onClick={() => dispatch(buyFish())}>Buy Fish</button>
    </div>
  );
};

export default HooksFishComponent;
