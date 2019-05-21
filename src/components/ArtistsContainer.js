import React, { PureComponent } from 'react';
import Artists from './Artists';
import ArtistSearch from './ArtistSearch';
import { fetchArtists } from '../services/fetchArtists';
import Paging from '../components/Paging';

export default class ArtistsContainer extends PureComponent {
  state = {
    artistName: '',
    page: 1,
    text: '',
    artists: [],
    count: 1,
  }

  getArtists = () => {
    fetchArtists(this.state.artistName, this.state.page)
      .then((results) => {
        this.setState({ 
          artists: results.artists,
          count: results.count
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.artistName !== this.state.artistName || prevState.page !== this.state.page) {
      this.getArtists(this.state.artistName);
    }
  }

  handleChange = ({ target }) => {
    this.setState({ 
      text: target.value
    });
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

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      artistName: this.state.text,
      text: ''
    });
  }

  render() {
    const { artistName, page, text, artists, count } = this.state;

    return (
      <>
        <ArtistSearch text={text} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Paging currentPage={page} allPages={count} incrementPage={this.incrementPage} decrementPage={this.decrementPage}/>
        <Artists artistArray={artists}/>
      </>
    );
  }
}
