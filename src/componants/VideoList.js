import React, { Component } from 'react'




// const API_KEY = "AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I";
// const channelID = "UCPvXZ-V7lhPRcWnJYA3nJaw";
// const result = 5;

// var URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`


export default class VideoList extends Component {

    state = {
        videosName :[]
      }

    style = () => {
        return{
           backgroundColor: 'yellow',
           border : '1px black solid',
           height: '60vh',
           width:'20vh',
           margin: 'auto',
           
           display:'grid',
           gridTemplateColumns:'auto',
        //    gridTemplateRows:'auto auto auto auto auto auto auto'
          
        }
    }

    //    getV () {fetch(URL)
    //     .then((response) => response.json())
    //     .then((responseJson) => {
        
    //     const newL = responseJson.items.map(elem => elem.snippet.thumbnails.medium.url);
    //     this.setState({vList:newL})
        
        
    //     })
        
    //     .catch((error) => {
    //       console.error(error);
    //     });
    //   }
      

    render() {
        const {names} = this.props;
        const {pics} = this.props;
        return (
                        

            <div style={this.style()}>

                {console.log(names)}


                { pics.map((elem,index )=> {
                return (
                
                <img src={elem} style={{gridColumnStart: '1' }}  height="100%" width="100%" overflow='hidden' /> 
                
                )
                
                }) }
                
                {/* { names.map((elem,index )=> {
                return (
                
                <p style={{gridColumnStart: '2',gridColumnEnd: '3'}}>{elem}</p>
                
                
                )
                
                }) } */}
              

                
            </div>
        )
    }
}
