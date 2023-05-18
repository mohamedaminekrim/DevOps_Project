// userController.js

const db = require('../dbConfig');

// Création d'un nouvel utilisateur
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  const user = {
    name,
    email,
  };

  db.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) {
      console.error('Erreur lors de la création de l\'utilisateur :', err);
      res.status(500).send('Erreur lors de la création de l\'utilisateur');
    } else {
      console.log('Utilisateur créé avec succès');
      res.status(201).send('Utilisateur créé avec succès');
    }
  });
};

// Récupération d'un utilisateur par ID
exports.getUser = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de l\'utilisateur :', err);
      res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
    } else {
      if (result.length === 0) {
        res.status(404).send('Utilisateur non trouvé');
      } else {
        console.log('Utilisateur récupéré avec succès');
        res.status(200).json(result[0]);
      }
    }
  });
};

// Mise à jour d'un utilisateur
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const updatedUser = {
    name,
    email,
  };

  db.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur :', err);
      res.status(500).send('Erreur lors de la mise à jour de l\'utilisateur');
    } else {
      console.log('Utilisateur mis à jour avec succès');
      res.status(200).send('Utilisateur mis à jour avec succès');
    }
  });
};

// Suppression d'un utilisateur
exports.deleteUser = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', err);
      res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
    } else {
      console.log('Utilisateur supprimé avec succès');
      res.status(200).send('Utilisateur supprimé avec succès');
    }
  });
};
