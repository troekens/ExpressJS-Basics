const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin'); //Route admin
const shopRoutes = require('./routes/shop'); //Route shop

app.use(bodyParser.urlencoded({extended: false})); // Permet d'extraire le body dans un post sans utiliser la raw approche de NodeJS
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files! Pour les fichiers CSS.

app.use('/admin', adminRoutes); //route pour localhost:3000/admin/....
app.use(shopRoutes); //route localhost:3000/....

app.use((req, res, next) => { // Route mise en dernier dans le cas ou chemin n'est pas géré.
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
