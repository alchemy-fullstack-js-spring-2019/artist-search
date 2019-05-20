import React from 'react';
import PropTypes from 'prop-types';

function Artist({ artist, id }) {
  return <p>{artist}, id:{id}</p>;
}

Artist.propTypes = {
  artist: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Artist;
