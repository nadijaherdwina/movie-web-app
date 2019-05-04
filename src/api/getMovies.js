const fetch = require('node-fetch');
const express = require('express');
const baseUrl = 'https://api.themoviedb.org/3/movie/'
const dotenv = require('dotenv').config();
var cors = require('cors');
const app = express();
const port = 5050;
const bodyParser = require("body-parser");

var corsOptions = {
    origin: 'http://' + process.env.IP_ADDRESS + ':3000',
    optionSuccessStatus: 200
}

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended : true }));

app.post('/get-now-playing-movies', cors(corsOptions), function(req, res, next) {
    const page = req.body.page;
    const apiKey = process.env.MOVIEDB_API_KEY;
    apiUrl = baseUrl + 'now_playing?api_key=' + apiKey + '&language=en-US&page=' + page;
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        // res.redirect('/error');
        return;
    });
});

app.listen(port, (err) => {
    if(err) { console.log(err) 
    return; };
    console.log('Listening on port ' + port);
})

app.options('*', cors())


module.exports = app;
