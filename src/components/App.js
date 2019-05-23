import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ArtistsContainer from './ArtistsContainer';
import AlbumsContainer from './albums/AlbumsContainer';
import SongsContainer from './songs/SongsContainer';
import LyricsContainer from './lyrics/LyricsContainer';

export default function App(){
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ArtistsContainer}></Route>
        <Route exact path="/:artistName/:artistId" component={AlbumsContainer}></Route>
        <Route exact path="/:artistName/:artistId/:albumId" component={SongsContainer}></Route>
        <Route exact path="/:artistName/:artistId/:albumId/:songName/:songId" component={LyricsContainer}></Route>
      </Switch>
    </Router>
  );
}
