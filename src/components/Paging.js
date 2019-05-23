import React from 'react';
import PropTypes from 'prop-types';

function Paging({ currentPage, totalPages, changePage }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button style={{ height: '20px' }} onClick={() => changePage(currentPage - 1)}> Prev </button>
      <p>{currentPage + 1} of {totalPages}</p>
      <button style={{ height: '20px' }} onClick={() => changePage(currentPage + 1)}> Next </button>
    </div>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired
};

export default Paging;
