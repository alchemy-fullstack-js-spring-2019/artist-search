import React, { PureComponent } from 'react';
import Artists from '../components/Artist/Artists';
import SearchForm from '../components/Artist/SearchForm';
import { getArtists } from '../services/music-brainz-API';
import Paging from '../components/paging/Paging';

export default class ArtistSearch extends PureComponent {
  state = {
    search: '',
    artists: [],
    currentPage: 1,
    totalPages: 1
  }

  fetchArtists = () => {
    getArtists(this.state.search, this.state.currentPage)
      .then(({ artists, totalPages }) => this.setState({ artists, totalPages }));
  }

  searchSubmit = event => {
    event.preventDefault();
    this.fetchArtists();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  updatePage = page => this.setState({ currentPage: page })

  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentPage !== this.state.currentPage) {
      this.fetchArtists();
    }
  }

  render() {
    return (
      <>
        <SearchForm search={ this.state.search } handleChange={ this.handleChange } searchSubmit={ this.searchSubmit } />
        <Paging currentPage={ this.state.currentPage } totalPages={ this.state.totalPages } updatePage={ this.updatePage } />
        <Artists artistArray={ this.state.artists } />
      </>
    );
  }
}
