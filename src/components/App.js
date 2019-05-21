import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ArtistsContainer from './ArtistsContainer';
import AlbumsContainer from './albums/AlbumsContainer';

export default function App(){
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ArtistsContainer}></Route>
        <Route path="/artists/:artistId" component={AlbumsContainer}></Route>
      </Switch>
    </Router>
  );
}
