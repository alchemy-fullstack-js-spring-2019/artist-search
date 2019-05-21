import React from 'react';
import PropTypes from 'prop-types';
import Art from './Art';
import AlbumInfo from './AlbumInfo';

function Album({ album }) {
  return (
    <>
      <Art id={album.id} archive={album['cover-art-archive'].front} />
      <AlbumInfo title={album.title} year={album.date} />
    </>
  );
}

Album.propTypes = {
  album: PropTypes.object.isRequired
};

export default Album;
