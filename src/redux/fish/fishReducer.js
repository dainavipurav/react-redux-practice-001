import { BUY_FISH } from "./fishTypes";

const initialState = {
  fishCount: 40,
};

export const fishReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_FISH:
      return {
        ...state,
        fishCount: state.fishCount - 1,
      };
    default:
      return state;
  }
};
