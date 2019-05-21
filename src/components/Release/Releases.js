import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

function Releases({ releaseArray }) {
  const releaseList = releaseArray.map(release => {
    return (
      <li key={ release.id }>
        <Release
          id={ release.id }
          title={ release.title }
          date={ release.date }
          coverArt={ release.coverArt }
        />
      </li>
    );
  });

  return (
    <ul>
      { releaseList }
    </ul>
  );
}

Releases.propTypes = {
  releaseArray: PropTypes.array.isRequired
};

export default Releases;
