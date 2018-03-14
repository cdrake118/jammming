import React, { Component } from 'react';
import './App.css';
import  SearchBar  from '../SearchBar/SearchBar';
import  SearchResults  from '../SearchResults/SearchResults';
import  Playlist  from '../Playlist/Playlist';



class App extends Component {
    constructor(props){
        super(props)
        this.state = {
              searchResults: [{
                name: 'name2',
                artist: 'artist',
                album: 'album',
              },
              {
                name: 'name23',
                artist: 'artist',
                album: 'album',
              },
              
            ],

            playlistName: '',

            playlistTracks: [{
              name: 'name3',
              artist: 'artist',
              album: 'album',
            },
            {
              name: 'name4',
              artist: 'artist',
              album: 'album',
            },
          ]
        }
        this.addTrack = this.addTrack.bind(this);
    }


  removeTrack(track){
    this.state.playlistTracks.filter(track.id)
  }

    addTrack(track){
      let isNew = true;
      for(let i=0; i<this.state.playlistTracks.length; i++){
        if(this.track.id === this.state.playlistTracks.id){
           isNew = false;
           alert('This song is already part of your playlist.')
        }
      }
      if(isNew){
      this.playlistTracks.push(track);
      }
    }

    render() {
      return (
        <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          /* Add a SearchBar component */
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onAdd={this.addTrack}/>
          </div>
        </div>
      </div>
      );
    }
  }
  
export default App;