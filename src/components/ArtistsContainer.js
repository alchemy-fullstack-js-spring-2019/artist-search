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
  }

  getArtists = () => {
    fetchArtists(this.state.artistName)
      .then(({ artists }) => {
        this.setState({ artists: artists });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.artistName !== this.state.artistName) {
      this.getArtists(this.state.artistName);
    }
  }

  handleChange = ({ target }) => {
    this.setState({ 
      text: target.value
    });
  }

  incrementPage = ()=>{
    this.setState((state)=>{
      return { page:state.page + 1 };
    });
  }
  decrementPage = ()=>{
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
    const { artistName, page, text, artists } = this.state;

    return (
      <>
        <ArtistSearch text={text} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Paging currentPage={1} allPages={2} incrementPage={this.incrementPage} decrementPage={this.decrementPage}/>
        <Artists artistArray={artists}/>
      </>
    );
  }
}
