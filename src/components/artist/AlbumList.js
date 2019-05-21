import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

function AlbumList({ albumArr }) {
  const allAlbums = albumArr.map(album => {
    return (
      <li key={album.id}>
        <Album album={album} />
      </li>
    );
  });

  return (
    <ul>
      {allAlbums}
    </ul>
  );
}

AlbumList.propTypes = {
  albumArr: PropTypes.array.isRequired
};

export default AlbumList;
