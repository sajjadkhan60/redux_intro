import { BUY_ICECREAM } from "./iceCreamType";

const initialState = {
  numOfMangoIceCreams: 30,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfMangoIceCreams: state.numOfMangoIceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
