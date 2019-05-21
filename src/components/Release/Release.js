import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Release({ id, title, date, coverArt }) {
  return (
    <>
      <img src={ coverArt } />
      <p>
        <Link to={ `/release/${id}` }>{ title }, { date }</Link>
      </p>
    </>
  );
}

Release.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  coverArt: PropTypes.string.isRequired,
};

export default Release;
