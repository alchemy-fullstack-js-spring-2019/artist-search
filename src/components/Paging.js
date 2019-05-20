import React from 'react';
import PropTypes from 'prop-types';

function Paging({ incrementPage, decrementPage, currentPage, allPages }) {
  return (
    <>
      <button onClick={() => decrementPage()}>Previous Page</button>
      <button onClick={() => incrementPage()}>Next Page</button>
    </>
  );
}

Paging.propTypes = {
  incrementPage: PropTypes.func.isRequired,
  decrementPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  allPages: PropTypes.number.isRequired
};

export default Paging;
