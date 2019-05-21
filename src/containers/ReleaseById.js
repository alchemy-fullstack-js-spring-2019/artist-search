import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Recordings from '../components/Recordings/Recordings';
import { getRecordings } from '../services/music-brainz-API';

export default class ReleaseById extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    recordings: []
  }

  fetchRecordings = () => {
    getRecordings(this.props.match.params.id)
      .then(recordings => this.setState({ recordings }));
  }

  componentDidMount() {
    this.fetchRecordings();
  }

  render() {
    return (
      <Recordings artist={ this.props.match.params.artist } recordingArray={ this.state.recordings }/>
    );
  }
}
