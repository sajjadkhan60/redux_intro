import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfChocolateCakes: 15,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfChocolateCakes: state.numOfChocolateCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
