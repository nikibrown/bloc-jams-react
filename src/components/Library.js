import React, { Component } from 'react';
import albumData from './../data/albums';
import { Route, Link } from 'react-router-dom';

class Library extends Component { 
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
  render() {
    return (
      <section className='library'>
        {
          this.state.albums.map( (album, index) => 
            <Link to={`/album/${album.slug}`} key={index}>
              {/* 
              Keys
              Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

              When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort.
              
              */}
              <img src={album.albumCover} alt={album.title} />
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs</div>
            </Link>
            
          )
        }
      </section>
    );
  }
}

export default Library;