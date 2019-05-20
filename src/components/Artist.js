import React from 'react';
import PropTypes from 'prop-types';

function Artist({ artist }){
  return (
    <p>{artist.name}</p>
  );
}

Artist.propTypes = {
  artist:PropTypes.object.isRequired
};

export default Artist;
