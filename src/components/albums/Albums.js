import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';


function Albums({ albumArray }){
  const albums = albumArray.map((album, i)=>{
    let coverArtUrl;
    const hasCoverArt = album['cover-art-archive'].front;
    if(hasCoverArt) {
      coverArtUrl = `http://coverartarchive.org/release/${album.id}/front`;
    } else {
      coverArtUrl = 'https://fakeimg.pl/640x360';
    }

    return (
      <li key={i}><Album album={album.title} image={coverArtUrl}/></li>
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
