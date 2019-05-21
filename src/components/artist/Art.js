import React from 'react';
import PropTypes from 'prop-types';

function Art({ id, archive }) {
  if(archive) {
    return <img src={`http://coverartarchive.org/release/${id}/front`} />;
  } else return <img src={'http://www.baronblaze.com/wp-content/uploads/2015/12/music-placeholder.png'} />;
}

Art.propTypes = {
  archive: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default Art;
