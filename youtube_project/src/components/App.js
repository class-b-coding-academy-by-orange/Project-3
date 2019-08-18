import React ,{Component} from 'react';
import SearchBar from './SearchBar';
//import { async } from 'q';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList'
import youtube from '../theAPI/youtube';

//import './App.css';
class App extends Component {
  state = {
    vid :[],
    SelectedVideo : null
  }
  handleSubmit = async (termFromSearchBar) => {
    const response =await youtube.get('/search' ,{
      params: {
        q: termFromSearchBar
      }
    })
    this.setState({
      vid:response.data.items
    })
  };
  handleVideoSelect = (video) => {
    this.setState({SelectedVideo:video})
  }
  render(){
    return(
      <div className="App">
        
      
      <SearchBar  handleFormSubmit ={this.handleSubmit} />
      <div className='ui grid'>
        <div className ='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={this.state.SelectedVideo} />


          </div>
          <div className="five wide column">
            <VideoList handleVideoSelect ={this.handleVideoSelect} videos ={this.state.vid}/>
          </div>

        </div>
      </div>
    </div>
      
    );
  }
}


export default App;
