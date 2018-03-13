import React, { Component } from 'react';
import './App.css';
import  SearchBar  from '../SearchBar/SearchBar';
import  SearchResults  from '../SearchResults/SearchResults';
import  Playlist  from '../Playlist/Playlist';

/* sample data */
let track = {
  name: 'name',
  artist: 'artist',
  album: 'album'
}

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
              searchResults: [{
                name: 'name',
                artist: 'artist',
                album: 'album'
              }]
        }
    }
    render() {
      return (
        <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          /* Add a SearchBar component */
          <div className="App-playlist">
          <SearchResults searchResults={this.state.SearchResults}/>
          /* Add a Playlist component */
          </div>
        </div>
      </div>
      );
    }
  }
  
export default App;