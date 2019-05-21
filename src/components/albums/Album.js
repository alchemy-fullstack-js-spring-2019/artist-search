import React from 'react';
import PropTypes from 'prop-types';

function Album({ album  }) {
  return (
    <p>{album}</p>
  );

}

Album.propTypes = {
  album: PropTypes.string.isRequired
};

export default Album;
