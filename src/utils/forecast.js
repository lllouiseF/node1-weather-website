 const request = require ('request')
 const forecast = (latitude, longitude, callback) => {

  const url = 'http://api.weatherstack.com/current?access_key=27a5dfdc4484efcdb29e9db5face23b1&query=' + latitude + ',' + longitude + '&units=m'

 request ({ url, json: true}, (error, {body}) => {
 if (error) {
 callback('Unable to connect to weather service', undefined)

 }else if (body.error) {
 callback('unable to find location', undefined)

 }else {

     callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. ' + 'There is a '+ body.current.precip + '% chance of rain.')


    }

 })


 }
module.exports =  forecast


