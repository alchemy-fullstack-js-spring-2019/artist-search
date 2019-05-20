import React, { PureComponent } from 'react';
import SearchForm from './SearchForm';
import ArtistList from './ArtistList';
import artistGetter from '../../services/artistGetter';

export default class ArtistSearch extends PureComponent {
  state = {
    searchTerm: '',
    artistResults: []
  }

  // 1. user types in search term, hits submit. Search term is set in state.
  // 2. api call is made with searchTerm, updates state with results
  // 3. results are loaded in the artistList
  handleSubmit = event => {
    event.preventDefault();
    
    return artistGetter(this.state.searchTerm)
      .then(res => {
        console.log(res);
        this.setState({ artistResults: res.artists });
      });
  }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      const { searchTerm } = this.state;
      return (
      <>
        <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} term={searchTerm} />
        {/* <ArtistList /> */}
        <p>{searchTerm}</p>
      </>
      );
    }
  
}
