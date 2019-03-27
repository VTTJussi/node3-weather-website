const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'https://api.darksky.net/forecast/f1e7387464c232d282d1b28a01f05eee/' + latitude + ',' + longitude
    const url = 'https://api.darksky.net/forecast/f1e7387464c232d282d1b28a01f05eee/' + latitude + ',' + longitude + '?units=si'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service !', undefined)
        } else if (body.error) {
            callback('Unable to find location !', undefined)
        } else {
            console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degrees out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain. UV-index: ' + body.daily.data[0].uvIndex + ', humidity: ' + body.daily.data[0].humidity + ', wind speed: ' + body.daily.data[0].windSpeed + ' and wind speed in gust: ' + body.daily.data[0].windGust + '.')
        }
    })
}

module.exports = forecast