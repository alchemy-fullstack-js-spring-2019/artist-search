import React from 'react';
import PropTypes from 'prop-types';

function Paging({ incrementPage, decrementPage, currentPage, allPages }) {
  return (
    <>
      <button onClick={() => decrementPage()}>Previous Page</button>
      <p>CURRENT PAGE:{currentPage}/{allPages}</p>
      <button onClick={() => incrementPage()}>Next Page</button>
    </>
  );
}

Paging.propTypes = {
  incrementPage: PropTypes.func.isRequired,
  decrementPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  allPages: PropTypes.number
};

export default Paging;
