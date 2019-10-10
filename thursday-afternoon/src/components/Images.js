import React, { useEffect } from "react";
import { connect } from "react-redux";
import Image from "./Image";
import * as actionCreators from "../state/actionCreators";

export function Images({ images, getImages }) {
  useEffect(() => {
    getImages();
  }, []);
  return (
    <div images={images}>
      Images will be here...
      <Image images={images.images} />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(Images);
