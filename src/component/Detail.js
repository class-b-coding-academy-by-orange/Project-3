import React, { Component } from 'react';


export default class Detail extends Component {

      render() {
        const {video} = this.props;
       
        if(!video){
          return <div><img width="900px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqHRTcKDdAlylj8JScs6EzFk4cO8c-K5DhN_y6E4nqyzQ_HWV" /></div>
        }

        return (
         
          <div >
             <div className="embed-responsive embed-responsive-16by9">

                <iframe  src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
             </div>
             
               <div><b>{video.snippet.title}</b> </div>
               <div><small>{video.snippet.description}</small></div>
            
             </div>
        );
      }


}