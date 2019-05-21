import React, { PureComponent } from 'react';
import SearchForm from '../components/search/SearchForm';
import ArtistList from '../components/search/ArtistList';
import artistGetter from '../services/artistGetter';

export default class ArtistSearch extends PureComponent {
  state = {
    searchTerm: '',
    artistResults: []
  }
  
  handleSubmit = event => {
    event.preventDefault();
    
    return artistGetter(this.state.searchTerm)
      .then(res => {
        this.setState({ artistResults: res.artists });
      });
  }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      const { searchTerm, artistResults } = this.state;
      return (
      <>
        <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} term={searchTerm} />
        <ArtistList artistArr={artistResults} />
      </>
      );
    }
  
}
