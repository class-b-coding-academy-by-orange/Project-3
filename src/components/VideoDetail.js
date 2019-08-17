import React, { Component } from 'react';


class VideoDetail extends Component {
    state = {
         video: null
    };

   

    render() {
        const video = this.state.video;

        if( !video ) {
            return (
//                 <div style={{ "width": "67.5%", "background": "#999999", "color": "#fff", "height": "85vh", "postion": "relative" }}> 
// <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9sWEecNUW-o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//                 </div>
<div style={{ "width": "67.5%", "background": "#999999", "color": "#fff", "height": "85vh", "postion": "relative" }}>
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9sWEecNUW-o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> 
            )
        }
        const videoId = video.id.videoId;
        const url = `https://www.youtube.com/embed/${ videoId }`;
     

        return (
            <div>
                <div className={"embed-responsive embed-responsive-16by9"}>
               <iframe title={ video.snippet.title } className={"embed-responsive-item"} src={url} allowFullScreen />
                </div>
                <div>
                    <h2>
                        { video.snippet.title }
                    </h2>
                    <div>
                        { video.snippet.description }
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoDetail;

