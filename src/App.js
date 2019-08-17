import React,{Component} from 'react';
import Search from './component/Search';
import Detail from './component/Detail';
import List from './component/List';
//import YTSearch from 'youtube-api-search';
import axios from 'axios';

//const apiKey= 'AIzaSyBuG0eiqFcpaeEJ1-uGJPFjrNK4lBX7cIA'


const divStyle = {
  display:'grid',
  gridTemplateColumns: '1/5' ,
  gridGap:'5px',
  border: '5px solid pink',};

//var overUrl= `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet`


 
export default class App extends Component  {
  
state = {
    videos: [],
    selectedVideo: null
};



  videoSearch= (term,dell)=>{
    term = encodeURIComponent(term);
  axios.get(`http://localhost:9000/search/"${term}`)
  .then(response => {
    //console.log(response)
    //console.log(response.data)
    this.setState({videos : response.data, // Set The Response Array To The Array in "App State"
          //selectedVideo: response.data[0]}); // Set "Selected Video" To First Element Of Response Array
  })
})
  .catch(error => {
    console.error(error);
  });

dell();
  };


// videoSearch=(term,del)=>{
 
//   YTSearch({key: apiKey, term: term},(data) => {
//     console.log(data);
//     this.setState({
//          videos: data,
//         //  selectedVideo:data[0]
//     });
//     del()
//   });
// }

 
  render(){
   
  return (
        <div style={divStyle} >
        <div style={{ gridColumn:'1/5', margin: '20px' }}>    
        <Search  onchange={this.videoSearch }/>
          </div>
     
          <div style={{ gridColumn:'1/4' }}>    
          <Detail video = {this.state.selectedVideo}/>
          </div>
     
          <div style={{ gridColumn:'4/5', margin: '20px' }}>
             <List videos={this.state.videos}  onselect={ select => this.setState({selectedVideo: select})} />
          </div>
         
          
     
    </div>
  );
}}

