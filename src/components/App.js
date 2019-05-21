import React from 'react';
import Header from './Header';
import ArtistSearch from '../containers/ArtistSearch';
import ArtistView from '../containers/ArtistView';
import AlbumView from '../containers/AlbumView';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={ArtistSearch} />
        <Route exact path="/artist/:id/:artist" component={ArtistView} />
        <Route path="/album/:id/:artist/:album" component={AlbumView} />
      </Switch>
    </Router>
  );
}
