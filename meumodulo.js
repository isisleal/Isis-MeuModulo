const fetch = require('node-fetch');
var cheerio = require('cheerio');

// fetch(`https://www.submarino.com.br`, {method: 'GET'})
// .then(res => 
//      res.text() )
// .then(body => {
//     return body})
// .catch(e => {
//     return console.log(e)})
    
    // $ = cheerio.load('html');
    // $('h2[class=shelf-title]').html()

    const https = require("https")

    const url = "https://www.americanas.com.br/produto/133718358/";

    https.get(url, res => {
        res.setEncoding("utf8");
        
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            console.log(body);
        });
    })

