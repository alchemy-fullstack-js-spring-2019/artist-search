import React from 'react';
import ArtistSearch from '../containers/ArtistSearch';
import ArtistById from '../containers/ArtistById';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/artist/:id" component={ ArtistById } />
        <Route path="/" component={ ArtistSearch } />
      </Switch>
    </Router>
  );
}
