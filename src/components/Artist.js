import React from 'react';
import PropTypes from 'prop-types';

function Artist({ artist }){
  console.log('artist', artist);
  return (
    <p>artist:{artist.name}</p>
  );
}

Artist.propTypes = {
  artist:PropTypes.object.isRequired
};

export default Artist;
