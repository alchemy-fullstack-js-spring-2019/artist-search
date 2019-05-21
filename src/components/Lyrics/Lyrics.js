import React from 'react';
import PropTypes from 'prop-types';

function Lyrics({ lyrics }) {
  const newLines = lyrics.split('\n').map(line => (<>{ line }<br /></>));
  return (
    <p>{ newLines }</p>
  );
}

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
