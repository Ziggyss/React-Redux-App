import * as types from "./actionTypes";

const initialImages = [];

export function imageReducer(state = initialImages, action) {
  switch (action.type) {
    case types.ADD_IMAGES:
      return {
        // ...state,
        images: action.payload
      };
    default:
      return state;
  }
}

const initialFaves = [];

export function favesReducer(state = initialFaves, action) {
  switch (action.type) {
    case types.ADD_TO_FAVES:
      return state.concat(action.payload);
    default:
      return state;
  }
}
