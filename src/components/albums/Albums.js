import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import { Link } from 'react-router-dom';

function Albums({ albumArray,  match }) {
  console.log('match', match);
  const albums = albumArray.map((album, i) => {
    let coverArtUrl;
    const hasCoverArt = album['cover-art-archive'].front;
    if(hasCoverArt) {
      coverArtUrl = `http://coverartarchive.org/release/${album.id}/front`;
    } else {
      coverArtUrl = 'https://fakeimg.pl/640x360';
    }
    const albumId = `/${match.params.artistName}/${match.params.artistId}/${album.id}`;
    return (
      <li key={i}>
        <Link to={albumId}>
          <Album album={album.title} image={coverArtUrl} />
        </Link>
      </li>
    );
  });

  return (
    <ul>
      {albums}
    </ul>
  );
}


Albums.propTypes = {
  albumArray: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default Albums;
