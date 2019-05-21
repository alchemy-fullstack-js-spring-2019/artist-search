import React from 'react';
import PropTypes from 'prop-types';
import Recording from './Recording';

export default function Recordings({ recordingArray }) {
  const recordingList = recordingArray.map(recording => {
    return (
      <li key={ recording.id }>
        <Recording title={ recording.title } />
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
  recordingArray: PropTypes.array.isRequired
};
