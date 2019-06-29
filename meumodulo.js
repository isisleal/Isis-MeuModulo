const request = require('request');
const cheerio = require('cheerio');
module.exports = function getproduct (urlProduct)  {

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

        seller: $('.seller-00776574000660').text(),

        price:  parseFloat ($('.main-offer__SalesPrice-sc-1oo1w8r-1').text().substring(2)),

        }

        console.log(jsonProduct)

    }
} ) }

return module.exports;

