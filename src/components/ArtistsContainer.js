import React, { PureComponent } from 'react';
import Artists from './Artists';
import ArtistSearch from './ArtistSearch';
import { fetchArtists } from '../services/fetchArtists';

export default class ArtistsContainer extends PureComponent {
  state = {
    artistName: '',
    page: 1,
    text: '',
    artists: []
  }

  getArtists = () => {
    fetchArtists(this.state.artistName)
      .then(({ artists }) => {
        this.setState({ artists: artists });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.artistName !== this.state.artistName) {
      this.getArtists(this.state.artistName);
    }
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

    return (
      <>
        <ArtistSearch text={text} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Artists artistArray={artists}/>
      </>
    );
  }
}
