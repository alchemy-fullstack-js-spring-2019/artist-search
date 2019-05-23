import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const styles = {
    color: 'black',
  };

  return (
    <Link to={'/'}>
      <h1 style={styles}>Artist Search</h1>
    </Link>
  );
}

