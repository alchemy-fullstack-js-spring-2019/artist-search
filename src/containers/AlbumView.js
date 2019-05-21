import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TrackList from '../components/album/TrackList';
import tracksGetter from '../services/tracksGetter';
import getLyrics from '../services/getLyrics';
import Lyrics from '../components/album/Lyrics';

export default class AlbumView extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count : 1
    };

    this.lyricsLoad = this.lyricsLoad.bind(this);
  }
  

  state = {
    tracks: null,
    lyrics: ''
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        album: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  componentDidMount() {
    return tracksGetter(this.props.match.params.id)
      .then(tracks => {
        this.setState({ tracks });
      });
  }

  lyricsLoad(artist, songTitle) {
    console.log('in lyricsLoad', artist, songTitle);
    return getLyrics(artist, songTitle)
      .then(lyrics => {
        console.log(lyrics);
        this.setState({ lyrics });
      });
  }

  render() {

    const imgStyle = {
      width: '200px'
    };

    return (
      <>
        <div>
          <h2>{this.props.match.params.album}</h2>
          <h3>{this.props.match.params.artist}</h3>
          <img style={imgStyle} src={`http://coverartarchive.org/release/${this.props.match.params.id}/front`} onError={(e)=>{e.target.onerror = null; e.target.src = 'http://www.baronblaze.com/wp-content/uploads/2015/12/music-placeholder.png'; }} />
          {this.state.tracks && <TrackList artist={this.props.match.params.artist} tracks={this.state.tracks} lyricsLoad={this.lyricsLoad} />}
        </div>
        <div>
          <Lyrics lyrics={this.state.lyrics}  />
        </div>
      </>
    );
  }
}
