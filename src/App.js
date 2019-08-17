import React, { Component } from 'react'
import Search from './componants/Search';
import VideoPlay from './componants/VideoPlay';
import VideoDiscription from './componants/VideoDiscription';
import VideoList from './componants/VideoList';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const API_KEY = "AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I";
const channelID = "UCPvXZ-V7lhPRcWnJYA3nJaw";
const result = 5;
var URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`





export default class App extends Component {

  state = {
    vdieoName:['Osaid','Laith'],
    videoPic :[],
    videoDis :[]
}


// Just for style
app = () => {
  return{
    display:'grid',
    gridTemplateColumns:'auto auto auto auto',
   
}
}

// Fetch on data from API
getData = (e)=> {

{fetch(e)
  .then((response) => response.json())
  .then((responseJson) => {

  const newName = responseJson.items.map(elem => elem.snippet.title);
  const newPic = responseJson.items.map(elem => elem.snippet.thumbnails.high.url);
  const newDis = responseJson.items.map(elem => elem.snippet.description);
  

  this.setState({vdieoName:newName});
  this.setState({videoPic:newPic});
  this.setState({videoDis:newDis});

  
  
  })
  
  .catch((error) => {
    console.error(error);
  });
} };

        



  render() {
    return (
<Router>
<div style={this.app()}>
      

<Route exact path="/" render={() => 
<React.Fragment>

      <div style={{gridColumnStart: '1',gridColumnEnd: '5'}}><Search/> </div> 
      <div style={{gridColumnStart: '1',gridColumnEnd: '4'}}><VideoPlay pp = {this.state.videoPic} /> </div> 
      <div style={{}}><VideoList names = {this.state.vdieoName} pics = {this.state.videoPic}/> </div> 
      <div style={{gridColumnStart: '1',gridColumnEnd: '4'}}><VideoDiscription  dis = {this.state.videoDis}/> </div> 
      <button  style={{gridColumnStart: '1',gridColumnEnd: '5'}} onClick={this.getData.bind(this,URL)}>Get data from Youtube API</button>

      </React.Fragment>

}/>

      
{/* <Route  path="/get" render={() => 
<React.Fragment>
      </React.Fragment>

}/> */}



      </div>

      </Router>
)
  }
  }
