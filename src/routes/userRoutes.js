// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Création d'un nouvel utilisateur
router.post('/users', userController.createUser);

// Récupération d'un utilisateur par ID
router.get('/users/:id', userController.getUser);

// Mise à jour d'un utilisateur
router.put('/users/:id', userController.updateUser);

// Suppression d'un utilisateur
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
