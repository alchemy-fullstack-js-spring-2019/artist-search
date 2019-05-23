import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ handleChange, handleSubmit, term }) {
  return (
    <form name="searchForm" onSubmit={handleSubmit} >
      <input type="text" name="searchTerm" onChange={handleChange} value={term}/>
      <button>Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired
};

export default SearchForm;
