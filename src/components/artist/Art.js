import React from 'react';
import PropTypes from 'prop-types';
import artworkGetter from '../../services/artworkGetter';

function Art({ id, archive }) {
  let photo = 'http://www.baronblaze.com/wp-content/uploads/2015/12/music-placeholder.png';
  if(archive) {
    photo = artworkGetter(id);
  }
  return <img src={photo}></img>;
}

Art.propTypes = {
  archive: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default Art;
