const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configurer la connexion à la base de données MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'eXitvoid',
  database: 'devopsproject'
});

// Connecter la base de données
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

// Utiliser body-parser pour traiter les données JSON
app.use(bodyParser.json());

// Définir les routes et les contrôleurs pour les fonctionnalités CRUD des utilisateurs
// TODO: Ajoutez vos routes et contrôleurs pour les utilisateurs

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
