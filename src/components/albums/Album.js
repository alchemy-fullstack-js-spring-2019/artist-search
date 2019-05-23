import React from 'react';
import PropTypes from 'prop-types';

function Album({ album, image  }) {
  return (
    <>
    <p>{album}</p>
    {image && <img style={{ width: '100px', height: 'auto' }} src={image} ></img>}
    </>
  );

}

Album.propTypes = {
  album: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Album;
