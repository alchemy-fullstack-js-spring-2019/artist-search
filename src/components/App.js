import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ArtistsContainer from './ArtistsContainer';

export default function App(){
  return (
    <Router>
      <ArtistsContainer />
    </Router>
  );
}
