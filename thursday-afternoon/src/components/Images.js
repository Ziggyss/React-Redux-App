import React from 'react';
import {connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function Images() {
  return (
  <div>Images will be here...</div>
  );
}

export default connect(
  state => state,
  {}
)(Images);
