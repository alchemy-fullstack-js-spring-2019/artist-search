import React, { Component } from 'react';
import AlbumList from '../components/artist/AlbumList';
import albumsGetter from '../services/albumsGetter';
import PropTypes from 'prop-types';
import Paging from '../components/Paging';

export default class ArtistView extends Component {
    
  state = {
    albums: null,
    currentPage: 0,
    totalPages: 1
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  componentDidMount() {
    return albumsGetter(this.props.match.params.id, this.state.currentPage)
      .then(albums => this.setState({ albums, totalPages: Math.ceil(albums['release-count'] / 10) }));
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
      return albumsGetter(this.props.match.params.id, this.state.currentPage)
        .then(res => {
          console.log(res);
          this.setState({ albums: res, totalPages: Math.ceil(res['release-count'] / 10) });
        });
    });
  }

  render() {

    return (
      <>
        <h2>{this.props.match.params.artist}</h2>
        {this.state.albums && <AlbumList albumArr={this.state.albums.releases} artist={this.props.match.params.artist} />}
        <Paging currentPage={this.state.currentPage} totalPages={this.state.totalPages} changePage={this.changePage} />
      </>
    );
  }
}
