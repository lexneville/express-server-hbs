// const request = require('request');
// const APPID = 'f37fdcaa1c983d7dac860b0dc0d0b9b6';

// const getWeather= () => {
//     request({
//         uri: `https://api.openweathermap.org/data/2.5/find?q=manchester,gb&APPID=${APPID}`,
//         json: true
//     }, (err, res) => {
//         if(err) throw err;
//         console.log(res.body);
//     });
// }

// getWeather(); 

//-=-=-=-=-=-=-=- Hide API key in env folder for security purposes =-=-=-=-=-=-=-=-=

// require('dotenv').config()
// const request = require('request');
// // const APPID = 'f37fdcaa1c983d7dac860b0dc0d0b9b6'; 

// const getWeather= () => {
//     request({
//         uri: `https://api.openweathermap.org/data/2.5/find?q=manchester,gb&APPID=${process.env.APPID}`,
//         json: true
//     }, (err, res) => {
//         if(err) throw err;
//         console.log(res.body);
//     });
// }

// getWeather(); 

//-=-=-=-=-=-=-=-=-=-=-= With Promisify module -=-=-=-=-=-=-=-=-=-=-=-=-=

require('dotenv').config()
const {promisify} = require('util');
const request = require('request');
const fs = require('fs');
// const APPID = 'f37fdcaa1c983d7dac860b0dc0d0b9b6';

const promisifiedRequest= promisify(request);

const getWeather= async() => {
    let data = await promisifiedRequest ({
        uri: `https://api.openweathermap.org/data/2.5/find?q=manchester,gb&APPID=${process.env.APPID}`,
        json: true
    });
    console.log(data.body);
    fs.writeFileSync('weatherData.json', JSON.stringify(data.body, null, 1) );
    // console.log(data); //This command will return all data rather than just the body
}

// Use fs module - writeFileSync 



getWeather(); 



