import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';
import { Link } from 'react-router-dom';

function Artists({ artistArray }){
  const artistList = artistArray.map((artist, i) => {
    const artistId = `/artists/${artist.id}`;
    return (
      <li key={i}>
        <Link to={artistId}><Artist artist={artist}/></Link>
      </li>
    );
  });

  return (
    <ul>
      {artistList}
    </ul>
  );
}

Artists.propTypes = {
  artistArray: PropTypes.array.isRequired
};

export default Artists;
