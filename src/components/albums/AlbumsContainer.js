import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fetchAlbums } from '../../services/fetchAlbums';
import Albums from './Albums';
import Paging from '../Paging';

export default class AlbumsContainer extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

    state = {
      albums: null,
      loading: false,
      page: 1,
      count: 10
    };
  
  getAlbums = () => {
    this.setState({ loading: true });
    fetchAlbums(this.props.match.params.artistId)
      .then((results) => {
        this.setState({
          albums: results.releases,
          loading:false,
          paged: null
        });
      })
      .then(() => {
        this.setState({ paged: this.state.albums.slice(0, 10) });
      });
  }

  paging = ()=>{
    const albums = this.state.albums;
    const sliceUpper = this.state.page * 10;
    const sliceLower = this.state.page * 10 - 10;
    this.setState({ paged:albums.slice(sliceLower, sliceUpper) }); 
  }

  incrementPage = ()=>{
    if(this.state.page >= this.state.count) {
      return;
    }
    this.setState((state)=>{
      return { page:state.page + 1 };
    });
  }
  decrementPage = ()=>{
    if(this.state.page <= 1) {
      return;
    }
    this.setState((state)=>{
      return { page:state.page - 1 };
    });
  }

  componentDidMount() {
    this.getAlbums();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) {
      this.paging();
    }
  }

  render() {
    const { albums, loading, page, paged } = this.state;
    if(loading) return <h1>Loading...</h1>;

    return (
      <>
      <Paging currentPage={page} allPages={10} incrementPage={this.incrementPage} decrementPage={this.decrementPage}/>
      {albums && paged && <Albums match={this.props.match} albumArray={paged} />}
      </>
    );
  }
}
