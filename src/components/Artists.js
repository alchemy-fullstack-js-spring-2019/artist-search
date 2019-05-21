import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

function Artists({ artistArray }) {
  const artistList = artistArray.map(artist => {
    return (
      <li key={ artist.id }>
        <Artist id={ artist.id } name={ artist.name } />
      </li>
    );
  });

  return (
    <ul>
      { artistList }
    </ul>
  );
}

Artists.propTypes = {
  artistArray: PropTypes.array.isRequired
};

export default Artists;
