//@flow
import React, { Component } from 'react';
import VideoDetail from './components/VideoDetail';
import YOUtube from './components/YOUtube';
import VideoList from './components/VideoList';



class App extends Component {
  state = {
        videos: [],
        search: true,
       selectedVideo: {}
    };
    

render() {
   
  return (
    <div style={{ "display": "flex", "flexDirection": "column"  }}>
      <div style={{ "display": "flex", "justifyContent": "space-between", "background": "#123456"}}>
          <h1 style={{ "color": "#fff", "alignSelf": "center", "flexBasis": "4", "paddingTop": "20px", "paddingLeft": "30px" }}>YouTube </h1>
      </div>
      <div style={{ "display" : "flex" }}>
        <VideoDetail video={ this.state.selectedVideo }/>  
        <VideoList
              videos={ this.state.videos }
              onVideoSelect={ ( userSelected ) => { this.setState({ selectedVideo: this.state.videos[ userSelected ] }) }}
          />
       </div>  
     
  </div>
  );
}
}

export default App;
