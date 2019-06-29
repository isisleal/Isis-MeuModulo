const request = require('request');
const cheerio = require('cheerio');

const urlProduct = 'https://www.americanas.com.br/produto/133718358/'

request (urlProduct, (error, response, html) => { 
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const mArray = []
        
        $('.fbPVXQ').each(function(i) {
            mArray.push($( this ).text()) 
             });
             

        const jsonProduct = {

        id: parseInt( $('.brNcBx').text().substring(5, 14) ) ,

        breadcrumb: mArray,

        name: $('.product-title__TitleUI-sc-116vf1e-0').text(),

        img: $('img').attr('src'),

        seller: $('.seller-00776574000660').text().repeat(1),

        price:  parseFloat ($('.main-offer__SalesPrice-sc-1oo1w8r-1').text().substring(2)),

        }

        console.log(jsonProduct)
        
    }
} ) 



