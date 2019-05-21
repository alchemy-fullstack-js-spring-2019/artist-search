import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fetchAlbums } from '../../services/fetchAlbums';
import Albums from './Albums';

export default class AlbumsContainer extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

    state = {
      albumName: '',
      albums: null,
      loading: false
    };
  
  
  getAlbums = () => {
    this.setState({ loading: true });
    console.log('get albums artistID', this.props);
    fetchAlbums(this.props.match.params.artistId)
      .then((results) => {
        console.log('results from api', results);
        this.setState({
          albums: results.releases,
          loading:false
        });
      });
  }

  componentDidMount() {
    this.getAlbums();
 
  }
  
  

  //pagination

  render() {
    const { albums, loading } = this.state;
    console.log('albums', albums);
    if(loading) return <h1>Loading...</h1>;
    return (
      <>
      {albums && <Albums albumArray={albums} />}
      </>
    );
  }


}

