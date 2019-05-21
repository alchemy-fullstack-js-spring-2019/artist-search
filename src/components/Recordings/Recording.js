import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Recording({ title }) {
  return (
    <p>
      <Link to={ `/recording/${title}` }>{ title }</Link>
    </p>
  );
}

Recording.propTypes = {
  title: PropTypes.string.isRequired
};

export default Recording;
