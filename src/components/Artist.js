import React from 'react';
import PropTypes from 'prop-types';

function Artist({ name }) {
  return (
    <p>
      name:{ name }
    </p>
  );
}

Artist.propTypes = {
  name: PropTypes.string.isRequired
};

export default Artist;
