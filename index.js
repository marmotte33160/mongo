const mongoose = require('mongoose')
require('dotenv/config')
const { stringify } = require('querystring')
mongoose
.connect(process.env.DB_CONNECTION, {useNewUrlParser:true})
.then(()=> console.log('we are connected to mongo...'))
.catch(err => console.log('could not connect to mongodb', err))

const movieschema = mongoose.Schema({
    titles: String,
    genre: [String],
    date: {
        type: Date,
        default: Date.now()

    }
})
const Movie = mongoose.model('Movie', movieschema)

function getAllmovies(){
    Movie.find()
    .then(allMovies => console.log('here are all movies', allMovies))
    .catch(err => console.log('could nod get all movies', err))

    
}
getAllmovies()