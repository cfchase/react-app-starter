import {
  TYPE_INCREMENT_HELLO_WORLD
} from "../actions/helloWorld";

const initialState = {
  increment: 1
};

export const helloWorldReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_INCREMENT_HELLO_WORLD:
        return {
          ...state,
          increment: state.increment + 1
        };
    default:
      return state;
  }
};
