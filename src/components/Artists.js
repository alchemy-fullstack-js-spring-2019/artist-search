import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

function Artists({ artistArray }){
  const artistList = artistArray.map((artist, i) => {
    return (
      <li key={i}>
        <Artist artist={artist}/>
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
