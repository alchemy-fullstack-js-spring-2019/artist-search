import React from 'react';
import PropTypes from 'prop-types';

function Art({ id, archive }) {
  const imgStyles = {
    width: '200px'
  };

  if(archive) {
    return <img style={imgStyles} src={`http://coverartarchive.org/release/${id}/front`} />;
  } else return <img style={imgStyles} src={'http://www.baronblaze.com/wp-content/uploads/2015/12/music-placeholder.png'} />;
}

Art.propTypes = {
  archive: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default Art;
