import axios from 'axios'

const theKey = 'AIzaSyD76ECH9oG_4clmu1V2ke4N7Ma-rPTZiao'

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3/",
    params :{
        part:"snippet",
        MaxOfResults :3,
        key :theKey
    }
})