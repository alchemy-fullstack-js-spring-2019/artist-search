import React, { PureComponent } from 'react';
import Artists from './Artists';
import ArtistSearch from './ArtistSearch';
// import { getArtists } from '../services/getArtists';

export default class ArtistsContainer extends PureComponent {
  state = {
    artistName: '',
    page: 1,
    text: '',
    artists: []
  }

  handleChange = ({ target }) => {
    this.setState({ 
      text: target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      artistName: this.state.text,
      text: ''
    });
  }

  render() {
    const { artistName, page, text, artists } = this.state;
    const artistArray = [
      { name: 'Hello' },
      { name: 'Goodbye' }
    ];

    return (
      <>
        <ArtistSearch text={text} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Artists artistArray={artistArray}/>
      </>
    );
  }
}
