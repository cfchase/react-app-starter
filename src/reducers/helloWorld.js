import {
  TYPE_GET_POST,
  TYPE_GET_POST_SUCCEEDED,
  TYPE_GET_POST_FAILED,
} from "../actions/helloWorld";

const initialState = {
  currentID: 0,
  post: null,
  postLoading: false,
  error: null
};

export const helloWorldReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_GET_POST:
      return {
        ...state,
        currentID: action.payload.id,
        postLoading: true
      };
    case TYPE_GET_POST_SUCCEEDED:
      return {
        ...state,
        post: action.payload.post,
        postLoading: false,
        error: null
      };
    case TYPE_GET_POST_FAILED:
      console.log(action.payload.error);
      return {
        ...state,
        post: null,
        postLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
