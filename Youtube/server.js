const express = require('express');
const App = express();

App.get('/', (req, res) => {
    res.json("I'm working !")
})

App.get('/url', (req, res) => {
    // res.json(URL)
    // console.log(URL);
    fetch(URL)
        .then(resposne => {
            return resposne.json()
        })
        .then(resposne => {
            const vedios = resposne.items.map(({ id, snippet }) => ({
                id: id.vedioId,
                title: snippet.title,
                description: snippet.description
            }))
            res.send(vedios)
        })
    
})

const api = 'AIzaSyDuqJmGyyzCuke9yn_QnvN0ntBwM9Q79oE';
const URL = `https://www.googleapis.com/youtube/v3/search?key=${api}&part=snippet,id`;


const PORT = 8000;
App.listen(PORT, () => console.log(`You are listining to PORT: ${PORT}`))