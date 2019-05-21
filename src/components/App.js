import React from 'react';
import ArtistSearch from '../containers/ArtistSearch';
import ArtistById from '../containers/ArtistById';
import ReleaseById from '../containers/ReleaseById';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/artist/:id" component={ ArtistById } />
        <Route path="/release/:id" component={ ReleaseById }/>
        <Route path="/" component={ ArtistSearch } />
      </Switch>
    </Router>
  );
}
