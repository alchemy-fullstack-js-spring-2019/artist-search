import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';

function Artist({ artist, id }) {
  return <Link to={`/artist/${id}/${artist}`}>{artist}</Link>;
}

Artist.propTypes = {
  artist: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Artist;
