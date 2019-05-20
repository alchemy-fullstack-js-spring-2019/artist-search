import React from 'react';
import PropTypes from 'prop-types';

function ArtistSearch({ text, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input name="text" type="text" value={text} onChange={handleChange}/>
      <button>Submit</button>
    </form>
  );
}

ArtistSearch.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default ArtistSearch;

