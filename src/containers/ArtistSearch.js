import React, { PureComponent } from 'react';
import SearchForm from '../components/search/SearchForm';
import ArtistList from '../components/search/ArtistList';
import artistGetter from '../services/artistGetter';
import Paging from '../components/Paging';

export default class ArtistSearch extends PureComponent {
  state = {
    searchTerm: '',
    artistResults: [],
    currentPage: 0,
    totalPages: 1
  }
  
  handleSubmit = event => {
    event.preventDefault();
    
    return artistGetter(this.state.searchTerm, this.state.currentPage)
      .then(res => {
        this.setState({ artistResults: res.artists, totalPages: (Math.ceil(res.count / 10)) });
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  changePage = destination => {
    let currentPage = destination;
    if(destination < 0) {
      currentPage = 0;
    }
    if(destination >= this.state.totalPages) {
      currentPage = this.state.totalPages - 1;
    }
    this.setState({ currentPage }, () => {
      return artistGetter(this.state.searchTerm, this.state.currentPage)
        .then(res => {
          this.setState({ artistResults: res.artists, totalPages: (Math.ceil(res.count / 10)) });
        });
    });
  }

  render() {
    const { searchTerm, artistResults } = this.state;
    return (
    <>
      <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} term={searchTerm} />
      <ArtistList artistArr={artistResults} />
      <Paging currentPage={this.state.currentPage} totalPages={this.state.totalPages} changePage={this.changePage} />
    </>
    );
  }
  
}
