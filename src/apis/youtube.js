import axios from 'axios';
const KEY = 'AIzaSyDSdFRASJbPMw_NUmzxlacAL1tdWBeF41E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 7,
        key: KEY
    }
})