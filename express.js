import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Récupération des crédentials de la bdd
dotenv.config();
let db_user = process.env.DB_USER;
let db_password = process.env.DB_PASSWORD;

// Connexion à la base de données MongoDB
mongoose.connect(`mongodb+srv://${db_user}:${db_password}@mongotable.rbtmi.mongodb.net/?retryWrites=true&w=majority&appName=MongoTable`)
.then(() => {
    console.log('Connexion à la base de données réussie');
})
.catch((error) => {
    console.error('Erreur de connexion à la base de données', error);
});

// Création de l'application Express
const app = express();

// Définition des routes de l'API
app.get('/api/ma_route', (req, res) => {
    // Code pour récupérer des données depuis la base de données
    // et renvoyer la réponse au client
});

app.post('/api/ma_route', (req, res) => {
    // Code pour créer de nouvelles données dans la base de données
    // à partir des données envoyées par le client
});

app.put('/api/ma_route/:id', (req, res) => {
    // Code pour mettre à jour des données dans la base de données
    // à partir des données envoyées par le client et de l'ID spécifié
});

app.delete('/api/ma_route/:id', (req, res) => {
    // Code pour supprimer des données de la base de données
    // en utilisant l'ID spécifié
});

// Démarrage du serveur
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});