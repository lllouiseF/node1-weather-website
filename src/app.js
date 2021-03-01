const path = require('path')
const express = require ('express')
const hbs = require('hbs')
const geocode = require ('./utils/geocode')
const forecast = require('./utils/forecast')



const app = express()

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

//index hbs
app.get('', (req, res) => {
    res.render('index', {
    title: 'Weather',
    name: 'LGFAM'
    })
})
//about hbs
app.get('/about', (req, res)=> {
    res.render('about', {
        title: 'Lalisa Manobal',
        name:'yg entertainment'
    })
})
//help hbs
app.get('/help', (req, res)=> {
    res.render('help', {
        msg:'How can i help you',
        title: 'help',
        name: 'yg entertainment'

    })
})


app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error:  'put some address'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location} = {}) => {
if (error) {
    return res.send({error})
}
forecast(latitude, longitude, (error, forecastData) => {
    if(error) {
        return res.send({error})
    }
    res.send({
        forecast: forecastData,
        location,
        address: req.query.address
    })
})

    })
    

})
app.get('/product', (req, res) => {
    if(!req.query.search) {
return res.send({
    error: 'You must provide a search term'
})

    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})



app.get('/help/*', (req, res) => {

    res.render('error', {
        title: '404',
        name: 'Blackpink',
        errorMsg: 'help article not found'
    })
})


app.get('*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Blackpink',
        errorMsg: 'Page not found'
    })


})


app.listen(3000, () => {
console.log('server is up on port 3000')
})
