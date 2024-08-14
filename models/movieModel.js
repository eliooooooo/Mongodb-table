const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    fullplot: {
        type: String,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    poster: {
        type: String,
        required: false
    },
    released: {
        type: Date,
        required: true
    },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;