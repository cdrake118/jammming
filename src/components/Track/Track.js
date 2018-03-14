import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props){
    super(props)
    this.addTrack = this.addTrack.bind(this);

  }

  addTrack(){
    this.props.onAdd(this.props.track)
  }

  renderAction(){
    let isRemoval = true;
    if(!isRemoval){
      return <a className="Track-action" onClick={this.addTrack}> + </a>;
    }else{
      return <a className="Track-action" onClick={this.removeTrack}> - </a>;
    }
  }
  
  render() {
    return (
    <div class="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album} </p>
      </div>
      {this.renderAction()}
    </div>
    );
  }

 
}

export default Track;