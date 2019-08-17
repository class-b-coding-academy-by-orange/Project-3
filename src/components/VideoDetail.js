import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Write in the SearchBar and press Enter ... </div>;
    }

    const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
       return (
        <div>
            <div >
                <iframe src={VideoSrc} />  {/*allowFullScreen */}
            </div>
            <div >
            <h2 >{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
        </div>
        </div>

    )
}

export default VideoDetail;