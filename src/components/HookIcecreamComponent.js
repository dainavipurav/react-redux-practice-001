import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyIcecream } from "../redux";

const HookIcecreamComponent = () => {
  const icecreamCount = useSelector((state) => {
    return state.icecream.icecreamCount;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Icecreams : {icecreamCount}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  );
};

export default HookIcecreamComponent;
