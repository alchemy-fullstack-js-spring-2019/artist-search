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

  render() {
    return (
      <Recordings recordingsArray={ this.state.recordings }/>
    );
  }
}
