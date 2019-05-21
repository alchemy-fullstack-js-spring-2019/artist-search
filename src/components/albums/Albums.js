import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

function Albums({ albumArray }){
  console.log(albumArray);
  const albums = albumArray.map((album, i)=>{
    return (
      <li key={i}><Album album={album.title}/></li>
    );
  });

  return (
    <ul>
      {albums}
    </ul>
  );
}


Albums.propTypes = {
  albumArray: PropTypes.array.isRequired
}
;

export default Albums;
