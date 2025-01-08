# Lancer le projet

1. `git clone` ce repo (back-end) ainsi que [le front-end](https://github.com/Ozneeee/front-tp-api-bar.git)
2. `cd back-tpApiBar`
3. `npm install`
4. Suivre les instruction sur [le read-me du front-end](https://github.com/Ozneeee/front-tp-api-bar.git)
5. Lancer mongoDB en localhost et ouvrir compass (port 2701 par défault). Créer une base barapi sans collection.
6. Le .env est déjà configuré pour faire tourner mongo sur 127.0.0.1:2701 et le server sur 127.0.0.1:8000.
7. `npm start`
8. Enjoy 😄

---

Web Application de gestion de bars, de boissons et de commandes.
Ceci est un projet scolaire réalisé avec Diginamic dans un but d'apprentissage
Réalisé en ~ 7h. (front & back)

**Je recommande de tester le projet avec le front-end.** Pour la documentation du font end [cliquez ici](https://github.com/Ozneeee/front-tp-api-bar.git)

# Routes

- GET : "/allBars/
- POST : "/createBar" -> BODY: bar.model.js
- DELETE : "/:barId"
- PUT : "/update/:barId" -> BODY: bar.model.js

---

# Environnement

Node : 22.12.0
axios : 1.7.9
dotenv : 16.4.7
express : 4.21.2
express-validator : 7.2.1
mongodb : 6.12.0
mongoose : 8.9.3
nodemon : 3.1.9
