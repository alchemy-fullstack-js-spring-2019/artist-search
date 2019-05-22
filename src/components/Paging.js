import React from 'react';
import PropTypes from 'prop-types';

function Paging({ currentPage, totalPages, changePage }) {
  return (
    <>
    <button onClick={() => changePage(currentPage - 1)}>Previous Page</button>
    <p>{currentPage + 1} of {totalPages}</p>
    <button onClick={() => changePage(currentPage + 1)}>Next Page</button>
    </>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired
};

export default Paging;
