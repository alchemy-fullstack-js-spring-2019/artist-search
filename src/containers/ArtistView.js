import React, { Component } from 'react';
import AlbumList from '../components/artist/AlbumList';
import albumsGetter from '../services/albumsGetter';
import PropTypes from 'prop-types';

export default class ArtistView extends Component {
    
  state = {
    albums: []
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired
      }).isRequired
    }),
    artist: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }

  componentDidMount() {
    albumsGetter(this.props.id)
      .then(albums => this.setState({ albums }));
  }

  render() {
    return (
      <>
        <h2>{this.props.artist}</h2>
        <AlbumList albumArr={this.state.albums} />
      </>
    );
  }
}
