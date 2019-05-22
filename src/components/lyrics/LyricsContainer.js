import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fetchLyrics } from '../../services/fetchLyrics';
import Lyrics from './Lyrics';

export default class LyricsContainer extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  state = {
    lyrics: null
  };

  getLyrics = () => {
    fetchLyrics(this.props.match.params.artistName, this.props.match.params.songName)
      .then((results) => {
        this.setState({
          lyrics: results.lyrics
        });
      });
  }

  componentDidMount() {
    this.getLyrics();
  }

  render() {
    const { lyrics } = this.state;
    return (
      lyrics && <Lyrics lyrics={lyrics} />
    );
  
  }

}
