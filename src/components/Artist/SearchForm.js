import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.css';


function SearchForm({ search, handleChange, searchSubmit }) {
  return (
    <form style={styles} onSubmit={ searchSubmit }>
      <input name="search" type="text" onChange={ handleChange } value={ search } /><br/>
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
