import axios from "axios";
import * as types from "./actionTypes";

const nasaImagesApi =
  "https://cat-fact.herokuapp.com/facts";

export function addImages(images) {
  return {
    type: types.ADD_IMAGES,
    payload: images
  };
}

export const getImages = () => dispatch => {
  // const nasaImagePromise = axios.get(nasaImagesApi);
  // only if using promise all

  axios.get(nasaImagesApi).then(res => {
    const images = res.data;
    dispatch(addImages(images));
  });
};
