import React from 'react';
import PropTypes from 'prop-types';


function SearchForm({ search, handleChange, searchSubmit }) {
  return (
    <form onSubmit={ searchSubmit }>
      <input name="search" type="text" onChange={ handleChange } value={ search } />
      <button type="submit">Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchSubmit: PropTypes.func.isRequired
};

export default SearchForm;
