const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Movie = require('./models/movieModel');

// Récupération des crédentials de la bdd
dotenv.config();
let db_user = process.env.DB_USER;
let db_password = process.env.DB_PASSWORD;

// Création de l'application Express
const app = express();
app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/movies', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Page par défaut à 1
        const limit = 10; // Limite par défaut à 10
        const skip = (page - 1) * limit;

        const movies = await Movie.find({}).limit(limit).skip(skip);
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/movies/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const movie = await Movie.findById(id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/movies', async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.put('/movies/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/movies/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await Movie.findByIdAndDelete(id);
        res.status(200).json({ message: 'Movie deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Connexion à la base de données MongoDB
mongoose.connect(`mongodb+srv://${db_user}:${db_password}@mongotable.rbtmi.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=MongoTable`)
.then(() => {
    console.log('Connexion à la base de données réussie');
    // Démarrage du serveur
    app.listen(3000, () => {
        console.log('Serveur démarré sur le port 3000');
    });
})
.catch((error) => {
    console.error('Erreur de connexion à la base de données', error);
});