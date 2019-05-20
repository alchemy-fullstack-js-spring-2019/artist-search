import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" />
      <button>Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default SearchForm;
