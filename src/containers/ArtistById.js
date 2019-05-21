import React, { PureComponent } from 'react';
import { getReleases } from '../services/music-brainz-API';
import Releases from '../components/Release/Releases';
import PropTypes from 'prop-types';

export default class ArtistById extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }
  state = {
    releases: []
  }

  fetchReleases = () => {
    getReleases(this.props.match.params.id)
      .then(releases => this.setState({ releases }));
  }

  componentDidMount() {
    this.fetchReleases();
  }

  render() {
    return (
      <Releases releaseArray={ this.state.releases } />
    );
  }
}
