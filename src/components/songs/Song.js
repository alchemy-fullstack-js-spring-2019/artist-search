import React from 'react';
import PropTypes from 'prop-types';

function Song({ song }) {
  return (
    <p>{song}</p>
  );
}

Song.propTypes = {
  song: PropTypes.string.isRequired
};

export default Song;
