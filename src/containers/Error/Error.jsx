import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from './mapper';
import './Error.css';

function Error({ weatherHasErrored }) {
  return (
    <div
      className="Error"
      role="button"
      tabIndex="0"
      onKeyDown={() => weatherHasErrored(false)}
      onClick={() => weatherHasErrored(false)}
    >
      <span className="message">Error, please try again...</span>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Error);
