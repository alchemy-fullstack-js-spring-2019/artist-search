import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import { Link } from 'react-router-dom';

function AlbumList({ albumArr, artist }) {
  const allAlbums = albumArr.map(album => {
    return (
      <Link key={album.id} to={`/album/${album.id}/${artist}/${album.title}`}>
        <li style={{ margin: '20px', background: 'lavender', padding: '10px', color: 'black' }}>
          <Album album={album} />
        </li>
      </Link>
    );
  });

  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', width: '100%', listStyle: 'none' }}>
      {allAlbums}
    </ul>
  );
}

AlbumList.propTypes = {
  albumArr: PropTypes.array.isRequired,
  artist: PropTypes.string.isRequired
};

export default AlbumList;
