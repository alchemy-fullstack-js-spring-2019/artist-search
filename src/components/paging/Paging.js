import React from 'react';
import PropTypes from 'prop-types';

export default function Paging({ currentPage, totalPages, updatePage }) {
  return (
    <>
      <span>
        {currentPage} of {totalPages}
      </span>
      { currentPage > 1 && <button onClick={ () => updatePage(currentPage - 1) }>Previous Page</button> }
      { currentPage < totalPages && <button onClick={ () => updatePage(currentPage + 1) }>Next Page</button> }
    </>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
};
