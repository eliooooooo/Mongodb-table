import express, { request } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Récupération des crédentials de la bdd
dotenv.config();
let db_user = process.env.DB_USER;
let db_password = process.env.DB_PASSWORD;

// Création de l'application Express
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/movie', (req, res) => {
    console.log(request.body);
});

// Connexion à la base de données MongoDB
mongoose.connect(`mongodb+srv://${db_user}:${db_password}@mongotable.rbtmi.mongodb.net/?retryWrites=true&w=majority&appName=MongoTable`)
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