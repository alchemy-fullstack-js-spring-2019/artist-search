import React from 'react';
import ArtistSearch from '../containers/ArtistSearch';
import ArtistById from '../containers/ArtistById';
import ReleaseById from '../containers/ReleaseById';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecordingByTitle from '../containers/RecordingByTitle';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ ArtistSearch } />
        <Route exact path="/:artist/:id" component={ ArtistById } />
        <Route exact path="/:artist/release/:id" component={ ReleaseById }/>
        <Route path="/:artist/recording/:title" component={ RecordingByTitle } />
      </Switch>
    </Router>
  );
}
