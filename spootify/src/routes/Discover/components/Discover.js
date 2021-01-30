import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import axios from 'axios';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }
   async componentDidMount() {
     await axios.get(`https://api.spotify.com/v1/browse/new-releases`)
       .then(res => {
         const newReases = res.data;
         this.setState({ newReleases });
       })

     await axios.get(`https://api.spotify.com/v1/me/playlists`)
       .then(res => {
         const playlists = res.data;
         this.setState({ playlists });
       })
       await axios.get(`https://api.spotify.com/v1/browse/categories/{category_id}`)
       .then(res => {
         const categories = res.data;
         this.setState({ categories });
      })
      }

// GET https://api.spotify.com/v1/browse/new-releases
// GET https://api.spotify.com/v1/me/playlists
// GET https://api.spotify.com/v1/browse/categories/{category_id}
  



  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
