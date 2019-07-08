import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Recording({ title, artist }) {
  return (
    <p>
      <Link to={ `/${artist}/recording/${title}` }>{ title }</Link>
    </p>
  );
}

Recording.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};

export default Recording;
