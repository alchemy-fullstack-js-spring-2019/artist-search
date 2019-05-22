import React from 'react';
import PropTypes from 'prop-types';

function AlbumInfo({ year, title }) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>{title}</h3>
      <h4>{year}</h4>
    </div>
  );
}

AlbumInfo.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default AlbumInfo;


