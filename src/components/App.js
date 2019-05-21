import React from 'react';
import Header from './Header';
import ArtistSearch from '../containers/ArtistSearch';
import ArtistView from '../containers/ArtistView';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ArtistSearch} />
        <Route exact path="/artist/:id/:artist" component={ArtistView} />
      </Switch>
    </Router>
  );
}
