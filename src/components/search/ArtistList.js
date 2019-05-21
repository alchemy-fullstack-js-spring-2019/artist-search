import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

function ArtistList({ artistArr }) {
  const allArtists = artistArr.map(artist => {
    return (
      <li key={artist.id}>
        <Artist artist={artist.name} id={artist.id} />
      </li>
    );
  });

  return <ol>{allArtists}</ol>;
}

ArtistList.propTypes = {
  artistArr: PropTypes.array.isRequired
};

export default ArtistList;
