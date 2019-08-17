const express = require("express");
const app = express();
const axios = require("axios");
app.use(express.json());

const keyapi = "AIzaSyBuG0eiqFcpaeEJ1-uGJPFjrNK4lBX7cIA";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


app.get("/search/:searchTerm", (req, res) => {
    let search = encodeURIComponent(req.params.searchTerm); 
    const urll = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&type=video&key=${keyapi}`;
    axios.get(urll).then(response => {
      res.json(response.data);
    });
  });



const PORT = 9000;
app.listen(PORT, () => console.log(`listen to port ${PORT}`));

  
