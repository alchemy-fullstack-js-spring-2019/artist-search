import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Songs from './Songs';
import { fetchSongs } from '../../services/fetchSongs';

export default class SongsContainer extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }
  
  state = {
    songName: '',
    songs: null
  }

  getSongs = () => {
    fetchSongs(this.props.match.params.albumId)
      .then((results) => {
        this.setState({
          songs: results.recordings
        });
      });
  }

  componentDidMount(){
    this.getSongs();
  }

  render() {
    const { songs } = this.state;
    return (
      <>
      {songs && <Songs match={this.props.match} songsArray={songs} />}
      </>
    );
  }
}
