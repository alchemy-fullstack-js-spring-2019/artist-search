import React from 'react';
import ArtistSearch from '../containers/ArtistSearch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <ArtistSearch />
    </Router>
  );
}
