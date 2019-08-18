import React, { Component } from 'react';

export default class List extends Component {

  render() {
    return (
      <div className="listDev">
        <ul >
          
      {this.props.videos.map((video) => {

            return (

              <li  onClick={() => this.props.onselect(video)} className="list-group-item">
                <img  src={video.snippet.thumbnails.default.url} />
                <div>{video.snippet.title} </div>
              </li>
            )
          })}

        </ul>
      </div>
    );
  }










}