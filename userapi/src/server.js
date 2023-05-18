const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Autres configurations et middlewares...

// Enregistrement des routes des utilisateurs
app.use('/api', userRoutes);

// Autres routes et configurations...

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Le serveur est en écoute sur le port 3000');
});
