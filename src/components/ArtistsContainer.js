import React, { PureComponent } from 'react';
// import Artists from './Artists';
import ArtistSearch from './ArtistSearch';
// import { getArtists } from '../services/getArtists';

export default class ArtistsContainer extends PureComponent {
  state = {
    artistName: '',
    page: 1,
    text: '',
    artists: []
  }

  render() {
    const { artistName, page, text, artists } = this.state;
    return (
      <>
        <ArtistSearch text={text} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </>
    );
  }
}
