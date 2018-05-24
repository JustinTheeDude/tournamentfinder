//Require Variables
let axios = require('axios');
let cheerio = require('cheerio');


axios.get('http://locator.wizards.com/').then((response) => {
    if (response.status == 200) {
        const html = response.data;
        const $ = cheerio.load(html);

    }
}, (error) => console.log(err) );
