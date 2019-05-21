import React from 'react';
import PropTypes from 'prop-types';
import Recording from './Recording';

export default function Recordings({ artist, recordingArray }) {
  const recordingList = recordingArray.map(recording => {
    return (
      <li key={ recording.id }>
        <Recording artist={ artist } title={ recording.title } />
      </li>
    );
  });
  
  return (
    <ul>
      { recordingList }
    </ul>
  );
}

Recordings.propTypes = {
  artist: PropTypes.string.isRequired,
  recordingArray: PropTypes.array.isRequired
};
