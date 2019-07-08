import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ name, id }) {
  return (
    <p>
      <Link to={ `/${name}/${id}` }>{ name }</Link>
    </p>
  );
}

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Artist;
