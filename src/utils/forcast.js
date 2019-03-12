const request = require('request')

const forcast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/66683cebab06c4f3de2165e67a3499c9/'+ latitude +',' + longitude
    request({url, json: true}, (error, {body})=> {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.') 
        }
    })
}

module.exports = forcast