import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Lyrics from '../components/Lyrics/Lyrics';
import { getLyrics } from '../services/lyricsApi';

export default class RecordingByTitle extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    lyrics: ''
  }

  fetchLyrics = () => {
    getLyrics(this.props.match.params.artist, this.props.match.params.title)
      .then(({ lyrics }) => {
        this.setState({ lyrics });
      });
  }

  componentDidMount() {
    this.fetchLyrics();
  }

  render() {
    return (
      <Lyrics lyrics={this.state.lyrics} />
    );
  }

}
