import React, { PureComponent } from 'react';
import Artists from '../components/Artists';
import SearchForm from '../components/SearchForm';
import { getArtists } from '../services/music-brainz-API';

export default class ArtistSearch extends PureComponent {
  state = {
    search: '',
    artists: []
  }

  fetchArtists = () => {
    return getArtists(this.state.search)
      .then(artistsList => this.setState({ artists: artistsList }));
  }

  searchSubmit = event => {
    event.preventDefault();
    this.fetchArtists();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <>
        <SearchForm search={ this.state.search } handleChange={ this.handleChange } searchSubmit={ this.searchSubmit } />
        <Artists artistArray={ this.state.artists } />
      </>
    );
  }
}
//i have state
