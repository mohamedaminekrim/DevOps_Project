# DevOps_Project
## Introduction
Création d'une web application Node.js. Stockage des données dans MySQL. Test et deploiement.
## Projet en images
[Aperçu](ANNEX/ANNEXE.md)
## Clone
#### Recopier le répertoire (https)
	https://github.com/mohamedaminekrim/DevOps_Project.git
## Utilisation
Travail effectué avec Node.js (stockage des données via MySQL)
### 1. User API Web Application 
#### Web server (from root directory) :
	npm start
#### Test
	npm run test
### 2. Build Docker Image
	docker build -t app-devops-image .
### 3. docker compose
	docker-compose up
