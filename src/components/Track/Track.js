import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  renderAction(){
    let isRemoval;
    if(isRemoval){
      return '+'
    }else{
      return '-'
    }
  }
  
  render() {
    return (
    <div class="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album} </p>
      </div>
      <a className="Track-action">{this.renderAction()}</a>
    </div>
    );
  }

 
}

export default Track;